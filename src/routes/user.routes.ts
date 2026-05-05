import { Router } from 'express'

import { getUsers } from '@/controllers/user.controller'

export const userRouter = Router()

userRouter.get('/', getUsers)
