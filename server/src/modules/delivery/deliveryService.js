import Delivery from './deliveryModel.js'

import AppError from '../../utils/AppError.js'

export const createDelivery =
  async (payload) => {
    return await Delivery.create(
      payload
    )
  }

export const getAllDeliveries =
  async () => {
    return await Delivery.find({
      isDeleted: false
    })
      .populate('assignedVehicle')
      .populate('assignedDriver')
  }

export const updateDelivery =
  async (deliveryId, payload) => {
    const delivery =
      await Delivery.findById(
        deliveryId
      )

    if (
      !delivery ||
      delivery.isDeleted
    ) {
      throw new AppError(
        'Delivery not found',
        404
      )
    }

    Object.assign(delivery, payload)

    await delivery.save()

    return delivery
  }

export const deleteDelivery =
  async (deliveryId) => {
    const delivery =
      await Delivery.findById(
        deliveryId
      )

    if (
      !delivery ||
      delivery.isDeleted
    ) {
      throw new AppError(
        'Delivery not found',
        404
      )
    }

    delivery.isDeleted = true

    await delivery.save()

    return delivery
  }