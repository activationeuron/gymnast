import { Router } from 'express'
import authRouter from './auth'
import sheetsRoutes from './sheetsRoutes'
import eventsRoutes from './eventsRoutes'
const router = new Router()

router.use('/api/v1', authRouter)
router.use('/api/v1', sheetsRoutes)
router.use('/api/v1/', eventsRoutes)
export default router
