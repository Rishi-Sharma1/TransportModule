import express from 'express'

import {
  create,
  getAll,
  update,
 remove
} from './driverController.js'

import authMiddleware from '../../middlewares/authMiddleware.js'

import roleMiddleware from '../../middlewares/roldeMiddleware.js'

const router = express.Router()

router.post(
  '/',
  authMiddleware,
  roleMiddleware(
    'SUPER_ADMIN',
    'FLEET_MANAGER'
  ),
  create
)

router.get(
  '/',
  authMiddleware,
  getAll
)

router.patch(
  '/:id',
  authMiddleware,
  roleMiddleware(
    'SUPER_ADMIN',
    'FLEET_MANAGER'
  ),
  update
)

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(
    'SUPER_ADMIN'
  ),
  remove
)

export default router