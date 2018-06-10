// only for testing while develoment. Will be removed later.
// node permTest
require('dotenv').config({path: 'configs/.env'});
const permission = require('./Permission');
const User = require('../User');
const Seller = require('./User')(permission);
const Resource = require('./Resource');

async function makeSeller() {
	const user = await User.forge({id:1}).fetch();
	try{
		const s1 = await permission.makeSeller(user, 'superAdmin');
		console.log('successfully inserted seller with id ', s1.get('id'));
	} catch(e) {
		console.log('failed to insert ', e);
	}
	try{
		const user2 = await User.forge({id:3}).fetch();
		const s2 = await permission.makeSeller(user2);
		console.log('successfully inserted seller with id ', s2.get('id'));
	} catch(e) {
		console.log('failed to insert ', e);
	}
	process.exit();
}

async function grantRole() {
	try {
		const user2 = await Seller.forge({user_id:4}).fetch();
		const s1 = await permission.grantRole(user2, 'superAdmin');
		console.log('successfully granted seller superAdmin');
	} catch(e) {
		console.log('failed to grant ', e);
	}
	process.exit();
}

async function revokeRole() {
	try {
		const user2 = await Seller.forge({user_id:4}).fetch();
		const s1 = await permission.revokeRole(user2);
		console.log('successfully revoked all seller roles');
	} catch(e) {
		console.log('failed to revoke ', e);
	}
	process.exit();
}

async function isSeller() {
	try {
		const user2 = await User.forge({id:4}).fetch();
		const s1 = await permission.isSeller(user2);
		console.log('seller is in database ', s1);
	} catch(e) {
		console.log('failed to revoke ', e);
	}
	process.exit();
}

async function hasPerm() {
	const user2 = await Seller.forge({user_id:1}).fetch();
	const resource = await Resource.forge({id:20}).fetch();
	const s1 = await permission.canGrant(user2,resource);
	console.log('can create permssion ', s1);
	process.exit();
}

async function grant() {
	const user2 = await Seller.forge({user_id:3}).fetch();
	const resource = await Resource.forge({id:20}).fetch();
	const s1 = await permission.grant(user2, 0b00000111, resource);
	console.log('can create permssion ', s1);
	process.exit();
}

async function revoke() {
	const user2 = await Seller.forge({user_id:3}).fetch();
	const resource = await Resource.forge({id:20}).fetch();
	const s1 = await permission.revokeAccess(user2, resource);
	console.log('can revoke permssion');
	process.exit();
}

async function createProductLine(name, description) {
	const user = await Seller.forge({ user_id: 4 }).fetch();
	try{
		const pl = await user.createProductLine({ name, description });
		console.log('successfully craeted product line ', pl);
	} catch(e) {
		console.log('could not product line ', e);
	}
	process.exit();
}

async function updateProductLine() {
	const user = await Seller.forge({ user_id: 4 }).fetch();
	try{
		const resource = await Resource.forge({id:20}).fetch();
		const pl = await resource.fetchResource();
		const stat = await user.updateProductLine({ productLine: pl, description: 'something new here' });
		console.log('successfully updated product line ', stat);
	} catch(e) {
		console.log('could not product line ', e);
	}
	process.exit();
}

async function getRBACList() {
	const user = await Seller.forge({ user_id: 1 }).fetch();
	try{
		const list = await permission.getRBACList(user);
		console.log('successfully fetched rbac list ', list);
	} catch(e) {
		console.log('could not fetch rbac list ', e);
	}
	process.exit();
}

async function getABACList() {
	const user = await Seller.forge({ user_id: 3 }).fetch();
	try{
		const list = await permission.getAccessList(user, 'product_line');
		console.log('successfully fetched rbac list ', list);
	} catch(e) {
		console.log('could not fetch rbac list ', e);
	}
	process.exit();
}

async function sellerGrantsAccess() {
	const user3 = await Seller.forge({user_id:3}).fetch();
	const resource = await Resource.forge({id:20}).fetch();
	const user4 = await Seller.forge({user_id:4}).fetch();
	const s1 = await user4.grantAccess(user3, 0b00000111, resource);
	console.log('can create permssion ');
	process.exit();
}

async function sellerRevokesAccess() {
	const user3 = await Seller.forge({user_id:3}).fetch();
	const resource = await Resource.forge({id:20}).fetch();
	const user4 = await Seller.forge({user_id:4}).fetch();
	const s1 = await user4.revokeAccess(user3, resource);
	console.log('can revoke permssion ');
	process.exit();
}

async function productLines() {
	const user3 = await Seller.forge({user_id:3}).fetch();
	try{
		const list = await user3.productLines();
		const jsonList = list.map(item => ({name: item.resource.get('name')}));
		console.log('product lines for user are ', jsonList);
	} catch(e) {
		console.log('cant get productlines', e);
	}
}

//1 makeSeller();
//2 grantRole();
//3 revokeRole();
//4 isSeller();
//5 grant();
//6 revoke();
//7 hasPerm();
//8 getRBACList();
//9 getABACList();
//10 sellerGrantsAccess();
//11 sellerRevokesAccess();
//12 updateProductLine();
//13 productLines();
