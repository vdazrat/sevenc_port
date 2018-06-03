const bookshelf = require('../../configs/bookshelf');
const knex = bookshelf.knex;
const Resource = require('./Resource');

class ProductLine extends bookshelf.Model {
	get tableName() {
		return 'product_lines';
	}
	resource() {
		return this.belongsTo(Resource, 'resource_id');
	}
	getResource() {
		return Resource.forge({ id: this.get('resource_id') }).fetch();
	}
}

module.exports = ProductLine;
