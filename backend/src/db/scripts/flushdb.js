require('dotenv').config({ path: '../configs/.env' }); //relative path to package.json
const config = require('../configs/knexfile.js');  
const env = process.env.NODE_ENV;

console.log(env);

const knex = require('knex')(config[env]);

const shell = require('shelljs');

const branchName = process.argv[2];

const dumpPath = '../sevenc_port/backend/src/db/__dump__/';
shell.cd('../../db-templates-svc');
shell.exec(`rm -rf ${dumpPath}`);
if (shell.exec(`git checkout ${branchName}`).code !== 0) process.exit();
shell.exec(`mkdir ${dumpPath}`);
shell.cp('-R', 'refresh/', dumpPath);
shell.cp('-R', 'dump/', dumpPath);
shell.cp('-R', 'run/', dumpPath);
shell.cd('../sevenc_port/backend');
// next, run the seed
function flushDb() {
	console.log(`copied template ${branchName} to __dump__. Running the seed now.`);
	knex.seed.run({ directory: './src/db/__dump__/refresh'})
	.then(() => {
		console.log('successfully flushed');
		process.exit();
	}).catch((e) => {
		console.log('Failed to run flush script ', e);
		process.exit();
	});
} 

flushDb();