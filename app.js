const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')
const expenseRoutes = require('./routes/expenses')
const connectDb = require('./config/database')
const helper = require('./helpers/helper')

require('dotenv').config({ path: './config/.env' })

connectDb()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/expenses', expenseRoutes)



app.listen(process.env.PORT, () => {
    console.log("Server is running.")
})