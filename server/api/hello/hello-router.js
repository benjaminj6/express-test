let express = require('express');

let router = express.Router();
let controller = require('./hello-controller');

router.get('/', controller.getHello);

module.exports = router;