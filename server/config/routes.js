let helloRouter = require('../api/hello/hello-router');


module.exports = function(app) {

	// Hello endpoint and hello router.
	app.use('/hello', helloRouter);
};