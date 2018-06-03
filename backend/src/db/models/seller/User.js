
const bookshelf = require('../../configs/bookshelf');
const knex = bookshelf.knex;
const ProductLine = require('./ProductLine');

class User extends bookshelf.Model {
	get tableName() {
		return 'sellers';
	}

	async createProductLine(info) {
		if (!info) throw Error('Invalid: name and description is required for product line');
		const { name, description } = info;
		if (!name) throw Error('Invalid: name is required for product line');
		const sellerId = this.get('id');
		// create the resource
		await knex.transaction(async function(t) {
			try {
				const resourceId = await knex('resource_types').where({ description: 'product_line' }).select('id');
				const [rid] = await knex('resources')
					.transacting(t)
					.returning('id')
					.insert({owner_id: sellerId, created_by: sellerId, resource_type_id: resourceId[0].id});

				// create permsissions for resource
				const perm_id = await knex('resource_permissions')
					.transacting(t)
					.returning('id')
					.insert({ resource_id: rid, seller_id: sellerId, access: 0b00011111 });
				// next create the product_line for the allocated resource
				const product_line_id = await knex('product_lines')
					.transacting(t)
					.returning('id')
					.insert({ name, description, resource_id: rid });

				await t.commit();

				return ProductLine.forge({id:product_line_id.id}).fetch();
			} catch (e) {
				t.rollback();
				throw(e);
			}
		});

		return this;
	}

	getRole() {
		return this.get('role_id');
	}

	async grantAccess(user, access, resource) {
		const canGrant = await User.permission.canGrant(this, resource);
		if (!canGrant) {
			throw (new Error('Invalid: User does not have privilage to grant access to this resource.'));
		}
		return User.permission.grant(user, access, resource);
	}

	async revokeAccess(user, resource) {
		const canGrant = await User.permission.canGrant(this, resource);
		if (!canGrant) {
			throw (new Error('Invalid: User does not have privilage to revoke access to this resource.'));
		}
		return User.permission.revokeAccess(user, resource);
	}

	async updateProductLine({ productLine, description }) {
		const resource = await productLine.getResource();
		const canUpdate = await User.permission.canUpdate(this, resource);
		if (!canUpdate) {
			throw (new Error('Invalid: User does not have privilage to access to this resource.'));
		}
		// to do: validate strings.
		productLine.set({ description });
		return productLine.save();

	}

	// returns an array of resolved resources with same format as getAccesList.
	async productLines() {
		const accessList = await User.permission.getAccessList(this, 'product_line');
		const listMap = accessList.map(async item => {
			const resource = await item.resource.fetch();
			const pl = await resource.fetchResource();
			return {
				...{ item },
				resource: pl,
				};

			});
		const list = await Promise.all(listMap);
		return list;
	}
	
}

function withPermission(permission) {
	User.permission = permission;
	return User;
}

module.exports = withPermission;
