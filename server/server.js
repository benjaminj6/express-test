let express = require('express');
let mongoose = require('mongoose');

let Student = require('./db/student-model');
let Counter = require('./db/counter-model');

let app = express();

require('./config/middleware')(app);
require('./config/routes')(app);

mongoose.connect('mongodb://localhost/express-test', function() {

	// Student.create({firstName: 'Ben', lastName: 'Johnson', _id: 4}, function(err, student) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log(student);
	// 	}
	// });

	// Every time this method is called on an id in the Counters category, it increments and returns the outcome.
	// will be called in a post request for a new student to initalize the id.
	

	// Student.findById({_id: 1}, function(err, student) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log('student with id 1 -- ', student);
	// 	}
	// });

	console.log('Connected to MongoDB');
	app.listen(8080, function() {
		console.log('Listening to Express on port 8080');
	});
});


