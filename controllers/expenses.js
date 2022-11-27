const Expense = require('../models/expense')    
const helper = require('../helpers/helper')

module.exports = {
    getExpenses: async (req, res)=>{
        try {
            const expenseItems = await Expense.find()
            res.render('expenses.ejs', {expenses: expenseItems, helper: helper,}) 
        } catch (err) {
           console.log(err) 
        }
    },
    createExpense: async (req, res)=>{
        try {
            await Expense.create({
                expense: req.body.expenseItem,
            })
            console.log('expense has been added.')
            res.redirect('/expenses')
        } catch (err) {
           console.log(err) 
        }
    },
    
}