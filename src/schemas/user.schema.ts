import * as z from 'zod'

export const createUserSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
})

export type CreateUserInput = z.infer<typeof createUserSchema>
