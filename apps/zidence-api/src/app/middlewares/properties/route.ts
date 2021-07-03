import * as express from 'express'

const router = express.Router()
import { addProperty, getProperties } from "./controller"



router.post('/', addProperty)
router.get('/', getProperties)



export default router
