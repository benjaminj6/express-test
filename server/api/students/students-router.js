let express = require('express');

let router = express.Router();
let controller = require('./students-controller');

// Perhaps switch to studentID to allow for duplicate names?
router.get('/:studentID', controller.getStudentInfo);

// post to register new student? Or add that into the put request?
	// will use the counter-model in Mongo to automatically generate a student ID.
router.post('/register', controller.register);

// delete to remove student 
	// require teacher auth??
	// Does not decrement the student ID counter in Mongo

// put to update student info
router.put('/register')
	// Make certain items un-updateable?? (i.e. name)
		// Name
		// ID

module.exports = router;