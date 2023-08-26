import { Schema, Types, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: Schema.Types.ObjectId, ref: 'company' },
  password: { type: String, required: true },
})

const User = model('user', userSchema)
export default User
