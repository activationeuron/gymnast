import { Router } from 'express'
import authRouter from './auth'

const router = new Router()

router.use('api/v1/', authRouter)

export default router
