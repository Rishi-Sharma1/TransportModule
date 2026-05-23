import Driver from './driverModel.js'

import AppError from '../../utils/AppError.js'

export const createDriver = async (
  payload
) => {
  const existingDriver =
    await Driver.findOne({
      licenseNumber:
        payload.licenseNumber
    })

  if (existingDriver) {
    throw new AppError(
      'Driver already exists',
      400
    )
  }

  return await Driver.create(payload)
}

export const getAllDrivers =
  async () => {
    return await Driver.find({}).populate('assignedVehicle')
  }

export const updateDriver = async (
  driverId,
  payload
) => {
  const driver =
    await Driver.findById(driverId)

  if (!driver || driver.isDeleted) {
    throw new AppError(
      'Driver not found',
      404
    )
  }

  Object.assign(driver, payload)

  await driver.save()

  return driver
}

export const deleteDriver = async (
  driverId
) => {
  const driver =
    await Driver.findById(driverId)

  if (!driver || driver.isDeleted) {
    throw new AppError(
      'Driver not found',
      404
    )
  }

  driver.isDeleted = true

  await driver.save()

  return driver
}