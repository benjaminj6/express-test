let helloRouter = require('../api/hello/hello-router');
let studentsRouter = require('../api/students/students-router');


module.exports = function(app) {

	app.use('/hello', helloRouter);
	app.use('/students', studentsRouter);

};