import type { ErrorRequestHandler } from 'express'

export function errorHandler(): ErrorRequestHandler {
  return (err, _req, res, _next) => {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
