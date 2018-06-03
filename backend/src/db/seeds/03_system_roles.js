exports.seed = function(knex, promise) {
	return knex('system_roles').del()
		.then(function() {
			return knex('system_roles').insert(getRows());
		});
};

// bits from msb --> g|d|u|r|c
// g bit can grant access to other users
const getRows = () => {
	const permValues = [
		[0b10010, 'Admin[read only]'],
		[0b11111, 'Super Admin'],
	];

	return permValues.reduce((acc, curr) => {
		const row = {
			id: curr[0],
			description: curr[1],
		};
		acc.push(row);
		return acc;
	}, []);
};
