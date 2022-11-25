const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: Date,
})

module.exports = mongoose.model('Event', EventSchema)