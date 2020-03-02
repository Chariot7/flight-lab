const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import { Schema } from "mongoose";

const destinationSchema = new Schema({
    airport: {
     type: String,
     required: true,
     enum: ['AUS','DFW','DEN','LAX','SAN']
    },    
    arrival: {
        type: Date,
        required: true,
    }
    });

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['Alaska', 'Delta', 'JetBlue', 'American', 'Southwest'],
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        required: true,
    }, 
    airport: {
    type: String,
    required: true,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model(
    'Flight',
    flightSchema
);