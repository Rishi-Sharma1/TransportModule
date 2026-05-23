import {
  registerUser,
  loginUser
} from './authService.js'

import {
  registerSchema,
  loginSchema
} from './authValidation.js'

import { sendSuccess } from '../../utils/response.js'

export const register = async (
  req,
  res,
  next
) => {
  try {
    const validatedData =
      registerSchema.parse(req.body)

    const user = await registerUser(
      validatedData
    )

    sendSuccess(
      res,
      user,
      'User registered successfully',
      201
    )
  } catch (error) {
    next(error)
  }
}

export const login = async (
  req,
  res,
  next
) => {
  try {
    const validatedData =
      loginSchema.parse(req.body)

    const result = await loginUser(
      validatedData.email,
      validatedData.password
    )

    res.cookie(
      'refreshToken',
      result.refreshToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
      }
    )

    sendSuccess(
      res,
      {
        user: result.user,
        accessToken: result.accessToken
      },
      'Login successful'
    )
  } catch (error) {
    next(error)
  }
}