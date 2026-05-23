import { z } from 'zod'

export const createDeliverySchema =
  z.object({
    pickupLocation: z
      .string()
      .min(3, 'Pickup location required'),

    dropLocation: z
      .string()
      .min(3, 'Drop location required'),

    assignedVehicle: z
      .string()
      .min(1, 'Vehicle is required'),

    assignedDriver: z
      .string()
      .min(1, 'Driver is required'),

    status: z
      .enum([
        'PENDING',
        'IN_TRANSIT',
        'DELIVERED'
      ])
      .optional()
  })

export const updateDeliverySchema =
  z.object({
    pickupLocation: z
      .string()
      .min(3)
      .optional(),

    dropLocation: z
      .string()
      .min(3)
      .optional(),

    assignedVehicle: z
      .string()
      .optional(),

    assignedDriver: z
      .string()
      .optional(),

    status: z
      .enum([
        'PENDING',
        'IN_TRANSIT',
        'DELIVERED'
      ])
      .optional()
  })