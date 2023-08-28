import express, { Application } from 'express'
import connectDb from './db/mongoose.js'
import userRouter from './route/user/user.js'

const app: Application = express()
const port = process.env.PORT || 8000

app.use('/user', userRouter)

connectDb(() => {
  app.listen(port, () => {
    console.log(`server listing at http://localhost:${port}`)
  })
})


