import * as express from 'express'
const router = express.Router()

import { getProperties, addProperty } from './controller'

router.get('/', getProperties)
router.post('/', addProperty)

export default router
