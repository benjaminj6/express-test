let Student = require('../../db/student-model');
let Counter = require('../../db/counter-model');


let Controller = {};

Controller.getStudentInfo = function(req, res) {
	// Will query the db to find the user and return all relevant info

	Student.findById(req.params.studentID, function(err, person) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(200).json(person);
		}
	});
};

Controller.register = function(req, res) {

	Counter.getNextSequence('studentIDs', function(err, counter) {
		console.log('inside the getNextSeq -- the seq is ', counter.seq);
		console.log(req.body);

		Student.create( {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			_id: counter.seq,
		}, function(err, student) {
			if (err) {
				res.status(500).json(err)
				console.log(err);
			} else {
				res.status(201).json(student);
				console.log(student);
			}
		})		
	});

};

module.exports = Controller;