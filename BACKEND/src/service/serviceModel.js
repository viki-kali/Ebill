var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    eid: {
        type: String,
        required: true
    },
    sid: {
        type: String,
        required: true
    },
    complaintdate: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    resolvedate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('service', serviceSchema);
