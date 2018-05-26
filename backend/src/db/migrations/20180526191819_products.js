const { createTablesForSchemasWithKnex, dropTablesForSchemasWithKnex } = require('../utils');

const productSchema = {
	// i think we need to create a product suite,or product_line and grant access to users to enitre lines.,
	product_lines(table) {
		table.increments('id').primary();
		table.text('description');
		table.string('name');
		table.integer('resource_id').references('resources.id');
	},
	product_collections(table) {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.text('description');
		table.boolean('isActive');
		table.integer('created_by').references('sellers.id');
		table.integer('product_line_id').references('product_lines.id').notNullable();
	},
	product_collections__products(table) {
		table.integer('product_id').references('products.id');
		table.integer('product_collection_id').references('product_collections.id');
	},
	products(table) {
		table.increments('id').primary();
		table.text('name').notNullable();
		table.text('description');
		table.float('price');
		table.float('weight');
		table.dateTime('available_at');
		table.dateTime('updated_at');
		table.integer('product_class_id').references('product_classes.id');
		table.integer('product_line_id').references('product_lines.id').notNullable();
	},
	product_variants(table) {
		table.increments('id').primary();
		table.integer('product_id').references('products.id');
		table.text('name').notNullable();
		table.float('price_override');
		table.float('weight_override');
		table.integer('qty_available');
		table.integer('qty_required'); // computed from orders
	},
	product_categories(table) {
		table.increments('id').primary();
		table.integer('product_id').references('products.id');
		table.string('name');
		table.string('description');
		table.integer('parent_category_id').references('product_categories.id');
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
  		createTablesForSchemas([productSchema])
  	);
};

exports.down = function(knex, Promise) {
	const dropTablesForSchemas = dropTablesForSchemasWithKnex(knex);

  	return Promise.all(
	  	dropTablesForSchemas([productSchema])
  	);
};


