import { Request, Response } from 'express'
import Company from '../model/companyModel.js'
import User from '../model/userModel.js'
import Test from '../model/testModel.js'

const createCompanyHandler = (req: Request, res: Response) => {
  const company = new Company({})

  const user = new User({ email: 34 })

  const t = new Test({})
  t.save()
}
