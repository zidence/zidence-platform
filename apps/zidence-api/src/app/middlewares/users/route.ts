import * as express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Andy',
    },
    {
      id: 2,
      name: 'Ben',
    },
  ])
})

export default router
