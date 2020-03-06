import { Router } from 'express'
import eventsControllers from '../controllers/v1/eventsController.js'
const eventroutes = new Router()

eventroutes.post('/createevent', eventsControllers.createEvent)
eventroutes.get('/getsheetsbylevel', eventsControllers.getSheetsByLevel)
eventroutes.get('/getallevents', eventsControllers.getAllEvents)
export default eventroutes
