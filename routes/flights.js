var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

router.get('/', flightsCtrl.index);
/* GET /flights/new */
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.post('/flights/:id', flightsCtrl.recreate);
router.get('/:id', flightsCtrl.show)
module.exports = router;
