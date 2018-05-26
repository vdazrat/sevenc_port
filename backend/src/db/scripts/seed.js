require('dotenv').config({ path: '../configs/.env' }); //relative path to package.json


const config      = require('../configs/knexfile.js');  
const env         = process.env.NODE_ENV;
const mode		  = process.env.MODE;
console.log(env);
const knex        = require('knex')(config[env]);

knex.seed.run({ directory: './src/db/seeds'})
	.then(() => {
		console.log('successfully ran the seed');
		process.exit();
	}).catch((e) => {
		console.log('Failed to run seed ', e);
		process.exit();
	});