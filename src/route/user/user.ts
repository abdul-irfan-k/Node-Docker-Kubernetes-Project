import express, { Request, Response, NextFunction } from 'express'

const router = express.Router()

const data = [
  { name: 'irfan' },
  { name: 'irfan' },
  { name: 'irfan' },
  { name: 'asdf' },
  { name: 'irfan' },
  { name: 'irfan' },
  { name: 'irfan' },
]

const sd = [
  { name: 'irfan' },
  { name: 'irfan' },
  { name: `irfan` },
  { name: 'irfan' },
  { name: 'irfan' },
  { name: 'irfan' },
  { name: 'irfan' },
]

const addValue = (name: string) => {
  return name
}

function testVAl(name: string = 'asdf') {
  return 'name'
}

const val: string = 'sdfsdfsdf'

const test = ' sdfg'

router.get('/', (req: Request, res: Response) => {
  console.log(req.url)
  res.status(200).json({ name: 'irfan' })
})

router.get('/detail', (req, res) => {
  res.send('hello ')
})

export default router
