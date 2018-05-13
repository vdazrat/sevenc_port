const casual = require('casual');
const { expect } = require('chai');
const sinon = require('sinon');
const R = require('ramda');

const { createTablesForSchemasWithKnex, dropTablesForSchemasWithKnex, createTablesForSchema } = require('../index.js');

const setup = () => {
	const knex = {
		schema: {
			createTable(tabName, cb) {
				cb(table);
				return Promise.resolve().then(() => ({ table: tabName, value: table.value }) );
			},
			dropTable(tabName) {
				return  Promise.resolve(tabName);
			},
		},
		raw(query) {
			return Promise.resolve(true);
		}
	};
	const table = {
		string(val) {
			this.value = val;
		}
	};
	return { knex, table };
};


describe('createTablesForSchema',() => {
	const { knex, table } = setup();
	const userSchema = {
		users(table) {
	  		table.string('username');
	  	}
  	};
  	const createTables = R.curry(createTablesForSchema)(knex);
  	const xs = createTables(userSchema);
	it('should return an array of promises', () => {
		expect(xs).to.have.length(1);
		expect(xs[0]).to.have.property('then');
	});
	it('should create a table called `users` with column `username`', () => {
		xs[0].then(x => expect(x.table).to.equal('users'));
		xs[0].then(x => expect(x.value).to.equal('username'));
	});

});


describe('createTablesForSchemasWithKnex()', () => {
	// setup
	const { knex, table } = setup();

	const createTablesForSchemas = createTablesForSchemasWithKnex(knex);
	const userSchema = {
		users(table) {
	  		table.string('username');
	  	}
  	};
	it('should return a list of promises', () => {
		const promises = createTablesForSchemas([userSchema]);
		expect(promises).to.have.length(1);
		promises[0].then(val => expect(val.table).to.be.equal('users'));
	});
});

describe('dropTablesForSchemasWithKnex()', () => {
	// setup
	const { knex, table } = setup();

	const dropTablesForSchemas = dropTablesForSchemasWithKnex(knex);
	const userSchema = {
		users(table) {
	  		table.string('username');
	  	}
  	};
	it('should return a list of promises, each returned from knex.deleteTable or forcedrop', () => {
		const promises = dropTablesForSchemas([userSchema]);
		expect(promises).to.have.length(1);
		promises[0].then(val => expect(val).to.be.equal(true));
	});
});

