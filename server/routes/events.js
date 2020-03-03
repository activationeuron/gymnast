import { Router } from 'express'
import events from '../controllers/v1/eventCreation.js'
const eventroutes = new Router()

eventroutes.post('/createevent', events.createEvent)
eventroutes.get('/getsheetsbylevel', events.getSheetsByLevel)

export default eventroutes
