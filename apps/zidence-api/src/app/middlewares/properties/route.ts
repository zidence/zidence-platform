import * as express from 'express'
const router = express.Router()

import { check } from "express-validator"

import { getProperties, addProperty } from './controller'

router.get('/', getProperties)
router.post('/', [
  check('name', 'Name Field is required')
    .isLength({ min: 3 }),
  check('price', 'Price Field is required').isNumeric(),
  check('category', 'Category Field is required')
    .isLength({ min: 3 }),
  check('subcategory', 'Subcategory Field is required')
    .isLength({ min: 3 }),
  check('developer', 'Developer Field is required')
    .isLength({ min: 3 }),
  check('yearBuilt', 'Year of Built Field is required')
    .isNumeric(),
  check('lotSize', 'lotSize Field is required')
    .isNumeric(),
  check('unitSize', 'unitSize Field is required')
    .isNumeric(),
  check('numberOfBedrooms', 'numberOfBedrooms Field is required')
    .isNumeric(),
  check('numberOfBathrooms', 'numberOfBathrooms Field is required')
    .isNumeric(),
  check('owner', 'Owner Field is required')
    .isLength({ min: 3 })
], addProperty)

export default router
