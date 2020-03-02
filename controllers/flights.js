const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    recreate
};

function create(req, res) {
   const flight = new Flight(req.body)
   flight.save(function(err) {
    if(err) return res.render('flights/new') ;  
    console.log(flight);
    res.redirect('/flights')
})};

function newFlight(req, res) {
    res.render('flights/new');
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}

function show(req, res) {
    console.log(req.body)
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {flight});
    });
}

function recreate(req, res) {
    console.log(req.body);
    Flight.findById(req.params.id, function(err, flight){
        flight.details.push(req.body)
        flight.save(function(err){
            if (err) return res.redirect(`/flights/${req.params.id}`);
            res.redirect(`/flights/${req.params.id}`);
        });
    })
}