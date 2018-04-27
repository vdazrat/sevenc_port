const path = require('path');
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8087;
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port);
console.log('server started on port: ', port);