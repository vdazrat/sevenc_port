const { createTablesForSchemasWithKnex, dropTablesForSchemasWithKnex } = require('../utils');

const rbacSchema = {
	system_roles(table) {
		table.integer('id').primary().notNullable(); // should be seeded
		table.string('description');
	},
};

const userSchema = {
	users(table) {
		table.increments('id').primary();
  		table.text('first_name').notNullable();
  		table.text('last_name').notNullable();
  		table.text('email').unique().notNullable();
  		table.string('phone', 20).unique().notNullable();
	},
	sellers(table) {
		table.increments('id').primary();
		table.integer('user_id').references('users.id');
		table.integer('role_id').references('system_roles.id').nullable();
	},
};

exports.up = function(knex, Promise) {
	const createTablesForSchemas = createTablesForSchemasWithKnex(knex);

  	return Promise.all(
  		createTablesForSchemas([rbacSchema, userSchema])
  	);
};

exports.down = function(knex, Promise) {
	const dropTablesForSchemas = dropTablesForSchemasWithKnex(knex);

  	return Promise.all(
	  	dropTablesForSchemas([rbacSchema, userSchema])
  	);
};
