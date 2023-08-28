import { Request, Response } from 'express'
import User from '../model/userModel.js'

export const signUpHandler = async (req: Request, res: Response) => {
  try {
    console.log('req body  of the sign up handler ')
    console.log(req.url)

    const { name, password, company, email } = req.body

    const oldUser = await User.findOne({ email })
    if (oldUser != null)
      return res.status(400).json({
        isValid: false,
        isError: true,
        errorType: 'EMAILALREADYUSED',
      })

    const user = new User({ name, password, company, email })
    await user.save()

    return res.status(200).json({ isValid: true })
  } catch (error: unknown) {
    console.log('error', error)
    if (error instanceof Error)
      return res.status(400).json({ isValid: false, isError: true })
    return res.status(400).json({ isValid: false, isError: true })
  }
}

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { name, password, email } = req.body

    const user = await User.findOne({ email })
    if (user == null)
      return res.status(400).json({ isValid: false, errorType: 'USERNOTFOUND' })

    const isCorrectPassword = user.password == password
    if (!isCorrectPassword)
      return res
        .status(400)
        .json({ isValid: false, errorType: 'INCORRECTPASSWORD' })
    return res.status(200).json({ isValid: true })
  } catch (error: unknown) {
    console.log('error')
    if (error instanceof Error)
      return res.status(400).json({ isValid: false, isError: true })
    return res.status(400).json({ isValid: false, isError: true })
  }
}

export const userPageHandler = async (req: Request, res: Response) => {
  const TEST_VAL = process.env.TEST_VAL
  res.status(200).json({ isValid: true })
}
