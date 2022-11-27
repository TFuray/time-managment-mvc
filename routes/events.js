const express = require('express')
const router = express.Router()
const eventsController = require('../controllers/events')

router.get('/', eventsController.getEvents)

router.post('/createEvent', eventsController.createEvent)



module.exports = router