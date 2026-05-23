import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle
} from './vehicleService.js'

import { sendSuccess } from '../../utils/response.js'

import { createVehicleSchema } from './vehicleValidation.js'

export const create = async (
  req,
  res,
  next
) => {
  try {
    const validatedData =
      createVehicleSchema.parse(
        req.body
      )

    const vehicle =
      await createVehicle(
        validatedData
      )

    sendSuccess(
      res,
      vehicle,
      'Vehicle created',
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
    const vehicles =
      await getAllVehicles()

    sendSuccess(
      res,
      vehicles
    )
  } catch (error) {
    next(error)
  }
}

export const getById = async (
  req,
  res,
  next
) => {
  try {
    const vehicle =
      await getVehicleById(
        req.params.id
      )

    sendSuccess(res, vehicle)
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
    const vehicle =
      await updateVehicle(
        req.params.id,
        req.body
      )

    sendSuccess(
      res,
      vehicle,
      'Vehicle updated'
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
    await deleteVehicle(
      req.params.id
    )

    sendSuccess(
      res,
      null,
      'Vehicle deleted'
    )
  } catch (error) {
    next(error)
  }
}