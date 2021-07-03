import * as express from 'express'

const router = express.Router()
import { addProperty, getProperties } from "./controller"



router.post('/', addProperty)
router.get('/', getProperties)

//locations
// router.post('/', addLocation)
// router.put('/', updateLocation)
// router.delete('/', deleteLocation)

export default router
