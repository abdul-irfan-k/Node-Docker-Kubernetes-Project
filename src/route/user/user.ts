import express from 'express'
import {
  loginHandler,
  signUpHandler,
  userPageHandler,
} from '../../controller/user.js'

const router = express.Router()

router.get('/', userPageHandler)
router.get('/signup', signUpHandler)
router.get('/login', loginHandler)

export default router
