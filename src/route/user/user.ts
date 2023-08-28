import express from 'express'
import {
  loginHandler,
  signUpHandler,
  userPageHandler,
} from '../../controller/user.js'

const router = express.Router()

router.get('/', userPageHandler)
router.post('/signup', signUpHandler)
router.post('/login', loginHandler)


export default router
