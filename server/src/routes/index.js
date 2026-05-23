import express from 'express'

import authRoutes from '../modules/auth/index.js'
import vehicleRoutes from '../modules/vehicle/index.js'
import driverRoutes from '../modules/driver/index.js'
import deliveryRoutes from '../modules/delivery/index.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/vehicles', vehicleRoutes)
router.use('/drivers', driverRoutes)
router.use('/deliveries', deliveryRoutes)

export default router