const R = require('ramda');

const createTablesForSchema = (knex, schema) => {
	const tableNames = Object.keys(schema);
	return tableNames.map(name => knex.schema.createTable(name, schema[name]));
};
const dropTablesForSchema = (knex, schema) => {
	const forceDropSchema = (name) => {
		return knex.raw(`DROP TABLE ${name} CASCADE`);
	};

	const tableNames = Object.keys(schema);
	return tableNames.map(forceDropSchema);
};

const createTablesForSchemasWithKnex = (knex) => {
	const createSchema = R.curry(createTablesForSchema)(knex);
	// [Schemalist] => [promises]
	const createTablesForSchemas = R.compose(R.flatten(), R.map(createSchema));

	return createTablesForSchemas;

};

const dropTablesForSchemasWithKnex = (knex) => {
	const dropSchema = R.curry(dropTablesForSchema)(knex);
	// [Schemalist] => [promises]
	const dropTablesForSchemas = R.compose(R.flatten(), R.map(dropSchema));

	return dropTablesForSchemas;
};

module.exports = {
	createTablesForSchemasWithKnex,
	dropTablesForSchemasWithKnex,
	createTablesForSchema,
	dropTablesForSchema,
};