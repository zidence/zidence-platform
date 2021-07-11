import * as express from 'express'
const router = express.Router()

import { check } from "express-validator"

import { getProperties, addProperty } from './controller'

router.get('/', getProperties)
router.post('/', [
  check('name', 'Name Field is required')
    .isLength({ min: 3 }),
  check('category', 'Category Field is required')
    .isLength({ min: 3 }),
  check('subcategory', 'subcategory Field is required')
    .isLength({ min: 3 }),
  check('developer', 'Developer Field is required')
    .isLength({ min: 3 }),
  check('owner', 'Owner Field is required')
    .isLength({ min: 3 })
], addProperty)

export default router
