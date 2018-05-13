require('dotenv').config({ path: '../configs/.env' }); //relative path to package.json


const config      = require('../configs/knexfile.js');  
const env         = process.env.NODE_ENV;
const mode		  = process.env.MODE;
console.log(env);
const knex        = require('knex')(config[env]);

if (mode === 'latest') {
	console.log('coming here');
	knex.migrate.latest([config])
		.then((v) => {
			console.log(`migrated latest version. ${v}`);
			process.exit();
		}).catch((err) => {
			console.log('Migrations failed');
			console.log(err);
			process.exit();
		});
}
if (mode === 'rollback') {
	knex.migrate.rollback([config])
		.then((v) => {
			console.log(`rolledback latest version. ${v}`);
			process.exit();
		}).catch((err) => {
			console.log('rollback failed');
			console.log(err);
			process.exit();
		});
}

if (mode === 'version') {
	knex.migrate.currentVersion([config])
		.then((v) => {
			console.log(`current version is ${v}`);
			process.exit();
		}).catch((err) => {
			console.log('version check failed');
			console.log(err);
			process.exit();
		});
}