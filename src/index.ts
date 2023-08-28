import express, { Application } from 'express'
import connectDb from './db/mongoose.js'
import userRouter from './route/user/user.js'

const app: Application = express()
const port = process.env.PORT || 8000

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`server listing at http://localhost:${port}`)
})

let conn = false
connectDb(() => {
  conn = true
})

app.use('/test', (req, res) => {
  res.status(200).json({ conn })
})
