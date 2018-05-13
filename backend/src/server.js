 const express = require('express');
 const cors = require('cors');

 module.exports = {
 	start({ port = 8088 } = {}) {
 		const app = express();

 		app.use(cors());

 		app.listen(port, () => { console.log('API Server started with CORS');});
 	}
 };