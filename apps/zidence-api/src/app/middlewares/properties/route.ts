import * as express from 'express'

const router = express.Router()
import { addProperty } from "./controller"



router.post('/', addProperty)

//locations
// router.post('/', addLocation)
// router.put('/', updateLocation)
// router.delete('/', deleteLocation)

export default router
