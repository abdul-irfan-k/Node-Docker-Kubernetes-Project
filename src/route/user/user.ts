import express from 'express'
import { loginHandler, signUpHandler } from '../../controller/user'

const router = express.Router()


router.get('/signup', signUpHandler)
router.get('/login',loginHandler)

export default router
