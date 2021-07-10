import * as express from 'express'
const router = express.Router()
import { check } from "express-validator"

import { getProperties, addProperty } from './controller'

router.get('/', getProperties)
router.post('/', [
  check('name', 'Name Field is required')
    .not()
    .isEmpty()
    .isLength({ min: 3 }),
  check('developer', 'Developer Field is required').not()
    .isEmpty()
    .isLength({ min: 3 }),
  check('owner', 'Owner Field is required').not()
    .isEmpty()
    .isLength({ min: 3 }),
  check('listOfNearestObjects', 'listOfNearestObjects Field is required')
    .isLength({ min: 3 })
], addProperty)

export default router
