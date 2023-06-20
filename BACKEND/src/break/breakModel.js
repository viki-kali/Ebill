var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var breakSchema = new Schema({
    eid: {
        type: String,
        required: true
    },
    did: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    penalityamt: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('break', breakSchema);
