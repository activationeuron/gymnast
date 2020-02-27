import { Router } from 'express'
import authController from '@controllers/v1/auth.js'
console.log(authController, 'auth controllers')
const authRoutes = new Router()

authRoutes.post('/login', authController.login)
authRoutes.post('/register', authController.register)

export default authRoutes
