const express = require('express')
const router = express.Router()
const ExpenseController = require('../controllers/expenses')

router.get('/', ExpenseController.getExpenses)

router.post('/createEvent', ExpenseController.createExpense)



module.exports = router