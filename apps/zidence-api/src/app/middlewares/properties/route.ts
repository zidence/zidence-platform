import * as express from 'express'
const router = express.Router()

import { check } from "express-validator"

import { getProperties, getProperty, addProperty, updateProperty, deleteProperty } from './controller'

router.get('/', getProperties)
router.get("/:propertyId", getProperty)

router.post('/', [
  check('name', 'Name Field min.3 characters')
    .isLength({ min: 3 }),
  check('category', 'Category Field min.3 characters')
    .isLength({ min: 3 }),
  check('subcategory', 'Subcategory Field min.3 characters')
    .isLength({ min: 3 }),
  check('developer', 'Developer Field min.3 characters')
    .isLength({ min: 3 }),
  check('owner', 'Owner Field min.3 characters')
    .isLength({ min: 3 })
], addProperty)

router.put("/", [
  check('name', 'Name Field min.3 characters')
    .isLength({ min: 3 }),
  check('category', 'Category Field min.3 characters')
    .isLength({ min: 3 }),
  check('subcategory', 'Subcategory Field min.3 characters')
    .isLength({ min: 3 }),
  check('developer', 'Developer Field min.3 characters')
    .isLength({ min: 3 }),
  check('owner', 'Owner Field min.3 characters')
    .isLength({ min: 3 })
], updateProperty)

router.delete("/:propertyId", deleteProperty)

export default router
