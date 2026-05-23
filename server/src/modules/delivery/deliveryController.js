import {
  createDelivery,
  getAllDeliveries,
  updateDelivery,
  deleteDelivery
} from './deliveryService.js'

import { sendSuccess } from '../../utils/response.js'

import { createDeliverySchema, updateDeliverySchema } from './deliveryValidation.js'

export const create = async (
  req,
  res,
  next
) => {
  try {
    const validatedData =
      createDeliverySchema.parse(
        req.body
      )

    const delivery =
      await createDelivery(
        validatedData
      )

    sendSuccess(
      res,
      delivery,
      'Delivery created',
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
    const deliveries =
      await getAllDeliveries()

    sendSuccess(res, deliveries)
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
    const delivery =
      await updateDelivery(
        req.params.id,
        updateDeliverySchema.parse(req.body)
      )

    sendSuccess(
      res,
      delivery,
      'Delivery updated'
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
    await deleteDelivery(
      req.params.id
    )

    sendSuccess(
      res,
      null,
      'Delivery deleted'
    )
  } catch (error) {
    next(error)
  }
}