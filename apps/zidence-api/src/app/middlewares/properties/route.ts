import * as express from 'express'
const router = express.Router()
import { check } from "express-validator"

import { getProperties, addProperty, getProperty, updateProperty, deleteProperty } from './controller'

router.get('/', getProperties)
router.post('/', [
  check('name', 'Name Field is required')
    .not()
    .isEmpty()
    .isLength({ min: 3 }),
  check('price', 'Price Field is required')
    .not()
    .isEmpty(),
  check('developer', 'Developer Field is required').not()
    .isEmpty()
    .isLength({ min: 3 }),
  check('yearBuilt', 'yearBuilt Field is required').not()
    .isEmpty(),
  check('lotSize', 'lotSize Field is required').not()
    .isEmpty(),
  check('unitSize', 'unitSize Field is required').not()
    .isEmpty(),
  check('numberOfBedrooms', 'numberOfBedrooms Field is required').not()
    .isEmpty(),
  check('numberOfBathrooms', 'numberOfBathrooms Field is required').not()
    .isEmpty(),
  check('owner', 'Owner Field is required').not()
    .isEmpty()
    .isLength({ min: 3 }),
  check('listOfNearestObjects', 'listOfNearestObjects Field is required')
    .isLength({ min: 3 })
], addProperty)
router.get("/:id", getProperty)
router.put("/", updateProperty)
router.delete("/:id", deleteProperty)

export default router
