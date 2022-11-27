const Event = require('../models/Event')    
const helper = require('../helpers/helper')

module.exports = {
    getEvents: async (req, res)=>{
        try {
            const eventItems = await Event.find()
            res.render('events.ejs', {events: eventItems, helper: helper,}) 
        } catch (err) {
           console.log(err) 
        }
    },
    createEvent: async (req, res)=>{
        try {
            await Event.create({
                event: req.body.eventItem,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
            })
            console.log('Event has been added.')
            res.redirect('/events')
        } catch (err) {
           console.log(err) 
        }
    },
    
}