let express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
	console.log('Hello world!');
});