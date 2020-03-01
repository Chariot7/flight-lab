var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

router.get('/', flightsCtrl.index);
/* GET /flights/new */
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
module.exports = router;
