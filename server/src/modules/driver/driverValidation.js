import { z } from 'zod'

export const createDriverSchema =
  z.object({
    name: z.string(),

    licenseNumber: z.string(),

    phone: z.string(),

    experience: z.number().optional()
  })