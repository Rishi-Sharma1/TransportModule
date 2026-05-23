import jwt from 'jsonwebtoken'

import User from '../modules/auth/authModel.js'

import AppError from '../utils/AppError.js'

const authMiddleware = async (
  req,
  res,
  next
) => {
  try {
    let token

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        'Bearer'
      )
    ) {
      token =
        req.headers.authorization.split(
          ' '
        )[1]
    }

    if (!token) {
      return next(
        new AppError(
          'Unauthorized access',
          401
        )
      )
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    const user = await User.findById(
      decoded.userId
    ).select('-password')

    if (!user) {
      return next(
        new AppError(
          'User not found',
          401
        )
      )
    }

    req.user = user

    next()
  } catch (error) {
    return next(
      new AppError(
        'Token expired or invalid',
        401
      )
    )
  }
}

export default authMiddleware