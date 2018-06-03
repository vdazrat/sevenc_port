const bookshelf = require('../../configs/bookshelf');
const Resource = require('./Resource');

const knex = bookshelf.knex;

const perms = {
	create: 0b00000001,
	read: 0b00000010,
	update: 0b00000100,
	delete: 0b00001000,
	grant: 0b00010000,
};

const roles = {
	readAdmin: 0b10010,
	superAdmin: 0b11111
};

const queries = {
	resourceAccess(sellerId, type) {
		const andFilter = type ? `and resource_types.description = '${type}'` : '';

		return `
		select resources.id as rid,
			resource_permissions.access as access,
			resource_types.description as type
		from resources, resource_permissions, resource_types, sellers
		where resources.id = resource_permissions.resource_id
			and resources.resource_type_id = resource_types.id
			and sellers.id = resource_permissions.seller_id
			and sellers.id = ${sellerId}
			${andFilter}
		`;
	},
	rbacList(type) {
		const filterByType = `
			select resources.id as rid, resource_types.description as description
			from resources, resource_types
			where resources.resource_type_id = resource_types.id
			and resource_types.description = '${type}';
		`;
		const fetchAll = `
			select resources.id as rid, resource_types.description as description
			from resources, resource_types
			where resources.resource_type_id = resource_types.id
		`;
		return type ? filterByType : fetchAll;
	},
};

class Permission {

	async makeSeller(user, withRole) {
		const roleId = roles[withRole] || null;
		const seller = new Seller({ user_id: user.get('id'), role_id: roleId });
		return await seller.save();
	}

	async isSeller(user) {
		const seller = await Seller.forge({ user_id: user.get('id') }).fetch();
		if (!seller) return false;
		return true;
	}

	async grantRole(seller, role) {
		const roleId = roles[role] || null;
		seller.set({ role_id: roleId });
		return await seller.save();
	}

	async revokeRole(seller) {
		return this.grantRole(seller, null);
	}
	async grant(seller, access, resource) {
		return resource.updateResourcePermission(seller, access);
	}
	async revokeAccess(seller, resource) {
		return resource.revokeAccess(seller);
	}
	
	/*
		type: (string) eg: ids
		rows: [{product_line_id, resource_id}, {}, {}],
		userId: id
		returns: promise which resolves to
		{`resourceType`: [{id, acl:['read','write']}] }

	*/
	getPerms(access) {
		const permissions = Object.keys(perms).filter(perm => perms[perm] & access);
		return permissions;
	}

	/*
	Return the complete list of resources to which seller has role access
	returns - array.shape({resource, access, type})
	--> note resource is lazy, i.e needs to be fetch() before use.
	*/
	async getRBACList(seller, type) {
		const access = seller.getRole();
		if (!(perms.read & access)) return null; // should atleast have read
		// fetch all resources
		try {
			const { rows } = await knex.raw(queries.rbacList());
			return rows.map(row => {
				const { rid, description } = row;
				return { resource: Resource.forge({ id:rid }), type: description, access };
			});
		} catch (e){
			throw (e);
		}
	}

	async getAccessList(seller, type) {
		const rbacList = await this.getRBACList(seller, type);
		if(rbacList !== null) return rbacList;

		try {
			const { rows } = await knex.raw(queries.resourceAccess(seller.get('id'), type));
			return rows.map(row => {
				const { rid, type, access } = row;
				return { resource: Resource.forge({ id:rid }), type, access };
			});
		} catch (e) {
			throw (e);
		}
	}

	// queries
	async has(seller, access, resource) { // lower level query
		// check if role has the access
		const roleAccess = seller.get('role_id');
		if (roleAccess !== null) {
			return !!(roleAccess & access);
		}
		const permissions = await resource.resourcePermissions(seller);
		return !!(permissions & access);
	}

	async canCreate(seller, resource) {
		return await this.has(seller, perms.create, resource);
	}

	async canUpdate(seller, resource) {
		return await this.has(seller, perms.update, resource);
	}

	async canRead(seller, resource) {
		return await this.has(seller, perms.read, resource);
	}

	async canDelete(seller, resource) {
		return await this.has(seller, perms.delete, resource);
	}

	async canGrant(seller, resource) {
		return await this.has(seller, perms.grant, resource);
	}

}

const permission = new Permission();
const Seller = require('./User')(permission);

module.exports = permission;
