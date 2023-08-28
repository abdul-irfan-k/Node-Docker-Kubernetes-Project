import { connect } from 'mongoose'

type CallbackFunction = () => void

export const connectDb = (callback: CallbackFunction) => {
  const MONGO_URL_TEST = process.env.MONGO_URL_TEST
  console.log('mongo rul ', MONGO_URL_TEST)
  connect(`mongodb://${MONGO_URL_TEST}/test`)
    .then(() => {
      console.log('mongo db connected successfully')
      callback()
    })
    .catch(err => {
      console.log(err)
    })
}

export default connectDb
