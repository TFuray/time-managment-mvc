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
    
}