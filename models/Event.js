const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: String,
})

module.exports = mongoose.model('Event', EventSchema)