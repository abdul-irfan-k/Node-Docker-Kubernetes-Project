import { Model, Schema, Types, model } from 'mongoose'

interface ComapanyInterface {
  name: string
  email: string
  employeesDetail: [Types.ObjectId]
  establishDate: Date
}

const companySchema = new Schema<ComapanyInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  employeesDetail: {
    type: [Schema.Types.ObjectId],
  },
  establishDate: {
    type: Date,
  },
})

const Company = model('company', companySchema)
export default Company
