const bookshelf = require('../configs/bookshelf');

class User extends bookshelf.Model  {
	get tableName() {
		return 'users';
	}
}

module.exports = User;
