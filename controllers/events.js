const Event = require('../models/Event')    

module.exports = {
    getEvents: async (req, res)=>{
        try {
            const eventItems = await Event.find()
            res.render('events.ejs', {events: eventItems}) 
        } catch (err) {
           console.log(err) 
        }
    },
    createEvent: async (req, res)=>{
        try {
            await Event.create({event: req.body.eventItem, startTime: req.body.startTime})
            console.log('Event has been added.')
            res.redirect('/events')
        } catch (err) {
           console.log(err) 
        }
    },
    
}