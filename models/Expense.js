const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    expense: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Expense', ExpenseSchema)