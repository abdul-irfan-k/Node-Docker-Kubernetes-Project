import { Request, Response } from 'express'
import User from '../model/userModel.js'

export const signUpHandler = async (req: Request, res: Response) => {
  try {
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
  } catch (error: unknown) {
    if (error instanceof Error)
      return res.status(400).json({ isValid: false, isError: true })
    return res.status(400).json({ isValid: false, isError: true })
  }
}

export const loginHandler = async (req: Request, res: Response) => {}

export const userPageHandler = async (req: Request, res: Response) => {
  const TEST_VAL = process.env.TEST_VAL
  res.status(200).json({ TEST_VAL })
}
