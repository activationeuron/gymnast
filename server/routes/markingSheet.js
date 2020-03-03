import { Router } from 'express'
import markingSheet from '../controllers/v1/markingSheet'
const sheetRoutes = new Router()

sheetRoutes.post('/createsheet', markingSheet.createMarkingSheet)

export default sheetRoutes
