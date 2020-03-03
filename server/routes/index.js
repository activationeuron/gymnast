import { Router } from 'express'
import authRouter from './auth'
import markingSheet from './markingSheet'
import events from './events'
const router = new Router()

router.use('/api/v1', authRouter)
router.use('/api/v1', markingSheet)
router.use('/api/v1/', events)
export default router
