import { ZodError } from 'zod'

const errorMiddleware = (
  err,
  req,
  res,
  next
) => {
  let statusCode =
    err.statusCode || 500

  let message =
    err.message ||
    'Internal Server Error'

  if (err instanceof ZodError) {
    statusCode = 400

    message = err.errors
      .map((e) => e.message)
      .join(', ')
  }

  res.status(statusCode).json({
    success: false,
    message
  })
}

export default errorMiddleware