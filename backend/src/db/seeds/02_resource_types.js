exports.seed = function(knex, promise) {
	return knex('resource_types').del()
		.then(function() {
			return knex('resource_types').insert(getResourceRows());
		});
};

const getResourceRows = () => {
	const types = [
		'product_line',
		'user'
	];

	return types.reduce((acc, curr) => {
		const row = { description: curr};
		acc.push(row);
		return acc;
	}, []);
};
