let express = require('express');

let router = express.Router();

router.get('/:student_name', function(req, res) {
	console.log('get request for -- ', req.params.student_name);
	res.status(200).json( { name: req.params.student_name });
});

module.exports = router;