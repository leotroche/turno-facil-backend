import type { Request, Response } from 'express'

import * as userService from '@/services/user.service'

export async function getUsers(_req: Request, res: Response) {
  const users = await userService.getUsers()
  res.status(200).json(users)
}
