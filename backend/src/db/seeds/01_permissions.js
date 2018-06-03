exports.seed = function(knex, promise) {
	return knex('permissions').del()
		.then(function() {
			return knex('permissions').insert(getPermissionRows());
		});
};

function getPermissionRows() {
	const permValues = [
		[0b00000000, 'disabled'],
		[0b00000001, 'create'],
		[0b00000010, 'read'],
		[0b00000011, 'create,read'],
		[0b00000100, 'update'],
		[0b00000101, 'create,update'],
		[0b00000110, 'read,update'],
		[0b00000111, 'create,read,update'],
		[0b00001000, 'delete'],
		[0b00001001, 'create,delete'],
		[0b00001010, 'read,delete'],
		[0b00001011, 'create,read,delete'],
		[0b00001100, 'update,delete'],
		[0b00001101, 'create,update,delete'],
		[0b00001110, 'read,update,delete'],
		[0b00001111, 'create,read,update,delete'], // -> moderator for the resource
		[0b00011111, 'create,read,update,delete,grant'], // --> admin for the resource
	];

	return permValues.reduce((acc, curr) => {
		const row = {
			id: curr[0],
			description: curr[1],
		};
		acc.push(row);
		return acc;
	}, []);
}

