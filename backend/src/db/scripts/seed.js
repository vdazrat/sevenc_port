require('dotenv').config({ path: '../configs/.env' }); //relative path to package.json


const config      = require('../configs/knexfile.js');  
const env         = process.env.NODE_ENV;
const mode		  = process.argv[2] || 'initial';
console.log(env);
const knex        = require('knex')(config[env]);

const directory = mode === 'dump' ? './src/db/__dump__/dump' : './src/db/seeds'

knex.seed.run({ directory })
	.then(() => {
		console.log(`successfully ran the seed ${mode}`);
		process.exit();
	}).catch((e) => {
		console.log('Failed to run seed ', e);
		process.exit();
	});
