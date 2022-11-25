const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')
const eventRoutes = require('./routes/events')
const connectDb = require('./config/database')

require('dotenv').config({ path: './config/.env' })

connectDb()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)


app.listen(process.env.PORT, () => {
    console.log("Server is running.")
})