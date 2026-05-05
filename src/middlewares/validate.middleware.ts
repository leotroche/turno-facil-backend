import type { RequestHandler } from 'express'
import * as z from 'zod'

export function validate(schema: z.ZodTypeAny): RequestHandler {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json({ message: z.prettifyError(result.error) })
    }

    req.body = result.data
    next()
  }
}
