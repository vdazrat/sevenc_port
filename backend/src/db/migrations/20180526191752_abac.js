const { createTablesForSchemasWithKnex, dropTablesForSchemasWithKnex } = require('../utils');

const permissionSchema = {
	permissions(table) { // should be seeded
		table.integer('id').primary().notNullable();
		table.string('description');
	},
	resource_types(table) { // should be seeded
		table.increments('id').primary();
		table.string('description');
	},
	resources(table) {
		table.increments('id').primary();
		table.integer('resource_type_id').references('resource_types.id');
		table.integer('owner_id').references('sellers.id');
		table.integer('created_by').references('sellers.id');
	},
	resource_permissions(table) {
		table.increments('id').primary();
		table.integer('resource_id').references('resources.id');
		table.integer('seller_id').references('sellers.id');
		table.integer('access').references('permissions.id');
	},

};

exports.up = function(knex, Promise) {
	const createTablesForSchemas = createTablesForSchemasWithKnex(knex);

  	return Promise.all(
  		createTablesForSchemas([permissionSchema])
  	);
};

exports.down = function(knex, Promise) {
	const dropTablesForSchemas = dropTablesForSchemasWithKnex(knex);

  	return Promise.all(
	  	dropTablesForSchemas([permissionSchema])
  	);
};
