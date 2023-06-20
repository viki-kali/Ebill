var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedSchema = new Schema({
    eid: {
        type: String,
        required: true
    },
    friendly: {
        type: String,
        required: true
    },
    design: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('feedback', feedSchema);
