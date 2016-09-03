let express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
	console.log('Get request on hello/');
	res.status(200).json({ message: 'Hello there!'});
});

module.exports = router;