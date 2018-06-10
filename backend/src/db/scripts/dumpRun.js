// runs the dumprun file.
require('dotenv').config({ path: '../configs/.env' }); //relative path to package.json
const permission = require('../models/seller/Permission');
const User = require('../models/User');
const Seller = require('../models/seller/User')(permission);
const Resource = require('../models/seller/Resource');

const runs = require('../__dump__/run');


async function run() {		
	await runs.reduce(
			(promiseChain, fn) => promiseChain.then(() => fn(permission, { User, Seller, Resource })),
			Promise.resolve(true),
		);
	process.exit();
}

run();
