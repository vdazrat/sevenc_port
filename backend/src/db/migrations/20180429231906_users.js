const { createTablesForSchemasWithKnex, dropTablesForSchemasWithKnex } = require('../utils');

const userSchema = {
	users(table) {
		table.increments('id').primary();
  		table.text('first_name').notNullable();
  		table.text('last_name').notNullable();
  		table.text('email').unique().notNullable();
  		table.string('phone', 20).unique().notNullable();
	},
};

const productSchema = {
	products(table) {
		table.increments('id').primary();
		table.text('name').notNullable();
		table.text('description');
		table.float('price');
		table.float('weight');
		table.dateTime('available_at');
		table.dateTime('updated_at');
		table.integer('product_class_id').references('product_classes.id');
	},
	product_variants(table) {
		table.increments('id').primary();
		table.text('name').notNullable();
		table.float('price_override');
		table.float('weight_override');
		table.integer('qty_available');
		table.integer('qty_required'); // computed from orders
	},
	products__product_variants(table) {
		table.increments('id').primary();
		table.integer('product_id').references('products.id');
		table.integer('product_variants_id').references('product_variants.id');
	},
	product_categories(table) {
		table.increments('id').primary();
		table.string('name');
		table.string('description');
		table.integer('parent_category_id').references('product_categories.id');
	},
	product__product_categories(table) {
		table.increments('id').primary();
		table.integer('product_id').references('products.id');
		table.integer('product_category_id').references('product_categories.id');
	},
	product_classes(table) {
		table.increments('id').primary();
		table.text('name').notNullable();
	},
	product_stocks(table) {
		table.increments('id').primary();
		table.float('cost_price').notNullable(); // useful for showing discounts
		table.float('selling_price').notNullable();
		table.text('sku').notNullable();
		table.integer('product_variant_id').references('product_variants.id');
		table.integer('product_location_id').references('product_locations.id');
	},
	products_sold(table) {
		table.increments('id').primary();
		table.float('price').notNullable();
		table.integer('product_stock_id').references('product_stocks.id');
	},
	product_locations(table) {
		table.increments('id').primary();
		table.string('name').notNullable();
	},
};

exports.up = function(knex, Promise) {
	const createTablesForSchemas = createTablesForSchemasWithKnex(knex);

  	return Promise.all(
  		createTablesForSchemas([userSchema, productSchema])
  	);
};

exports.down = function(knex, Promise) {
	const dropTablesForSchemas = dropTablesForSchemasWithKnex(knex);

  	return Promise.all(
	  	dropTablesForSchemas([userSchema, productSchema])
  	);
};

