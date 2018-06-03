const bookshelf = require('../../configs/bookshelf');
const knex = bookshelf.knex;

const getModel = (type) => {
	const types = {
		product_line: require('./ProductLine'),
	};
	return types[type];
};


class Resource extends bookshelf.Model {
	get tableName() {
		return 'resources';
	}

	async fetchResource() {
		const typeId = this.get('resource_type_id');
		const [{ description: resourceType }] = await knex('resource_types').where({ id: typeId }).select('description');
		
		const Model = await getModel(resourceType);
		const model = await Model.forge({ resource_id: this.get('id') }).fetch();
		return model;
	}

	async resourcePermissions(forUser) {
		const rid = this.get('id');
		const sellerId = forUser.get('id')
		try{
			const rows = await knex('resource_permissions')
				.where({seller_id: sellerId, resource_id: rid })
				.select('access');
			if (!rows || !rows.length) return null;
			return rows[0].access;
		} catch(e) {
			console.log(e);
			return 0;
		}
	}

	async updateResourcePermission(forUser, access) {
		const rid = this.get('id');
		const sellerId = forUser.get('id');
		const perm = await this.resourcePermissions(forUser);
		if(perm === null) {
			try {
				await knex('resource_permissions')
					.insert({ resource_id: rid, seller_id: sellerId, access: access });

				return this;
			} catch(e) {
				throw (e);
			}
		}
		try {
			await knex('resource_permissions')
				.where({ seller_id: sellerId, resource_id: rid })
				.update({ access: access | perm });

			return this;
		} catch(e) {
			throw (e);
		}
	}

	async revokeAccess(forUser) {
		const rid = this.get('id');
		const sellerId = forUser.get('id');
		try {
			await knex('resource_permissions')
				.where({ seller_id: sellerId, resource_id: rid })
				.del();

			return this;
		} catch(e) {
			throw (e);
		}
	}
}

module.exports = Resource;
