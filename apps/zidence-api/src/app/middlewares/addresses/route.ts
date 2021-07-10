import * as express from 'express'
const router = express.Router()

import { getAddresses } from './controller'

router.get('/', getAddresses)

export default router
