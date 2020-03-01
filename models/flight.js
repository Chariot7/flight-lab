const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import { Schema } from "mongoose";

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['Alaska', 'Delta', 'JetBlue', 'American', 'Southwest'],
    },
    flightNo: {
        type: Number,
        required: true,
    },
    departs: {
        type: Date,
        required: true,
    }, 
    arrival: {
    type: Date,
    required: true,
    },

});

module.exports = mongoose.model(
    'Flight',
    flightSchema
);