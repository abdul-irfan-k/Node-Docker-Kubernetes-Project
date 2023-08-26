import { Schema, InferSchemaType, model } from 'mongoose'

const testSchema = new Schema({
  name: { type: String, required: true },
  val: { type: String },
  avatar: String,
})

type testtype = InferSchemaType<typeof testSchema>

const Test = model('test', testSchema)
export default Test
