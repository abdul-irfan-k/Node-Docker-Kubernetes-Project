import { connect } from 'mongoose'

type CallbackFunction = () => void

export const connectDb = (callback: CallbackFunction) => {
  connect('mongodb://127.0.0.1:27017/test')
    .then(() => callback())
    .catch(err => {
      console.log(err)
    })
}

export default connectDb
