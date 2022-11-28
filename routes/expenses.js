const express = require('express')
const router = express.Router()
const ExpenseController = require('../controllers/expenses')

router.get('/', ExpenseController.getExpenses)

router.post('/createExpense', ExpenseController.createExpense)



module.exports = router