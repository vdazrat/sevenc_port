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
		[0b00001111, 'create,read,update,delete'],
	];
	const superAdminPerms = [
		[0b11110000, 'super override [delete]'],
		[0b11110001, 'super override [create]'],
		[0b11110010, 'super override [read]'],
		[0b11110011, 'super override [create,read]'],
		[0b11110100, 'super override [update]'],
		[0b11110101, 'super override [create,update]'],
		[0b11110110, 'super override [read,update]'],
		[0b11110111, 'super override [create,read,update]'],
		[0b11111000, 'super override [delete]'],
		[0b11111001, 'super override [create,delete]'],
		[0b11111010, 'super override [read,delete]'],
		[0b11111011, 'super override [create,read,delete]'],
		[0b11111100, 'super override [update,delete]'],
		[0b11111101, 'super override [create,update,delete]'],
		[0b11111110, 'super override [read,update,delete]'],
		[0b11111111, 'super override [create,read,update,delete]'],
	];
	const allPerms = ([...permValues, ...superAdminPerms]);
	return allPerms.reduce((acc, curr) => {
		const row = {
			id: curr[0],
			description: curr[1],
		};
		acc.push(row);
		return acc;
	}, []);
}

// check for access should check msb 4 bits first,
// then check lsb 4 bits