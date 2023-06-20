var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var readingSchema = new Schema({
    eid: {
        type: String,
        required: true
    },
    rid: {
        type: String,
        required: true
    },
    readingdate: {
        type: String,
        required: true
    },
    duedate: {
        type: String,
        required: true
    },
    units: {
        type: String,
        required: true
    },
    bill: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('readings', readingSchema);
