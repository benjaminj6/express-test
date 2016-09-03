let express = require('express');
let app = express();

require('./config/routes')(app);

app.listen(8080, function() {
	console.log('Listening to Express on port 8080');
});