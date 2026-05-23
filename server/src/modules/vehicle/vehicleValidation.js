import { z } from 'zod'

export const createVehicleSchema =
  z.object({
    registrationNumber: z.string(),

    type: z.enum([
      'TRUCK',
      'VAN',
      'CONTAINER'
    ]),

    manufacturer: z.string(),

    model: z.string(),

    fuelCapacity: z.number()
  })