let Controller = {};

Controller.getHello = function(req, res) {
	console.log('get request on /hello/');
	res.status(200).json({ message: 'Hello there!'});
};

module.exports = Controller;