require('dotenv').config({path: 'configs/.env'});

const config = require('./knexfile.js');  
const env = process.env.NODE_ENV;  
const knex = require('knex')(config[env]);

knex.raw('select 1+1 as result')
	.then(() => console.log('Knex connectd'))
	.catch(e => console.log(e));

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;

