import {
  createDriver,
  getAllDrivers,
  updateDriver,
  deleteDriver
} from './driverService.js'

import { sendSuccess } from '../../utils/response.js'

import { createDriverSchema } from './driverValidation.js'

export const create = async (
  req,
  res,
  next
) => {
  try {
    const validatedData =
      createDriverSchema.parse(
        req.body
      )

    const driver =
      await createDriver(
        validatedData
      )

    sendSuccess(
      res,
      driver,
      'Driver created',
      201
    )
  } catch (error) {
    next(error)
  }
}

export const getAll = async (
  req,
  res,
  next
) => {
  try {
    const drivers =
      await getAllDrivers()

    sendSuccess(res, drivers)
  } catch (error) {
    next(error)
  }
}

export const update = async (
  req,
  res,
  next
) => {
  try {
    const driver =
      await updateDriver(
        req.params.id,
        createDriverSchema.parse(req.body)
      )

    sendSuccess(
      res,
      driver,
      'Driver updated'
    )
  } catch (error) {
    next(error)
  }
}

export const remove = async (
  req,
  res,
  next
) => {
  try {
    await deleteDriver(req.params.id)

    sendSuccess(
      res,
      null,
      'Driver deleted'
    )
  } catch (error) {
    next(error)
  }
}