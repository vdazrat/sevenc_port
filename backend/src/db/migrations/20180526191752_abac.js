const { createTablesForSchemasWithKnex, dropTablesForSchemasWithKnex } = require('../utils');

const permissionSchema = {
	permissions(table) { // should be seeded
		table.integer('id').primary().notNullable();
		table.string('description').notNullable();
	},
	resource_types(table) { // should be seeded
		table.increments('id').primary();
		table.string('description').notNullable();
	},
	resources(table) {
		table.increments('id').primary();
		table.integer('resource_type_id').references('resource_types.id').notNullable();
		table.integer('owner_id').references('sellers.id').notNullable();
		table.integer('created_by').references('sellers.id').notNullable();
	},
	resource_permissions(table) {
		table.increments('id').primary();
		table.integer('resource_id').references('resources.id').notNullable();
		table.integer('seller_id').references('sellers.id').notNullable();
		table.integer('access').references('permissions.id').notNullable();
		table.unique(['resource_id', 'seller_id']);
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
