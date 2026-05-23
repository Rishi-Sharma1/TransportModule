import Vehicle from './vehicleModel.js'

import AppError from '../../utils/AppError.js'

export const createVehicle = async (
  payload
) => {
  const existingVehicle =
    await Vehicle.findOne({
      registrationNumber:
        payload.registrationNumber
    })

  if (existingVehicle) {
    throw new AppError(
      'Vehicle already exists',
      400
    )
  }

  const vehicle =
    await Vehicle.create(payload)

  return vehicle
}

export const getAllVehicles =
  async () => {
    return await Vehicle.find({
      isDeleted: false
    })
}

export const getVehicleById = async (
  vehicleId
) => {
  const vehicle =
    await Vehicle.findById(vehicleId)

  if (!vehicle || vehicle.isDeleted) {
    throw new AppError(
      'Vehicle not found',
      404
    )
  }

  return vehicle
}

export const updateVehicle = async (
  vehicleId,
  payload
) => {
  const vehicle =
    await Vehicle.findById(vehicleId)

  if (!vehicle || vehicle.isDeleted) {
    throw new AppError(
      'Vehicle not found',
      404
    )
  }

  Object.assign(vehicle, payload)

  await vehicle.save()

  return vehicle
}

export const deleteVehicle = async (
  vehicleId
) => {
  const vehicle =
    await Vehicle.findById(vehicleId)

  if (!vehicle || vehicle.isDeleted) {
    throw new AppError(
      'Vehicle not found',
      404
    )
  }

  vehicle.isDeleted = true

  await vehicle.save()

  return vehicle
}