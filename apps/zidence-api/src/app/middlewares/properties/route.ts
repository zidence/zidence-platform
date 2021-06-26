import * as express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      type: 'House',
    },
    {
      id: 2,
      type: 'Apartment',
    },
  ])
})

export default router
