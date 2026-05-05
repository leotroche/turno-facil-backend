import request from 'supertest'
import { describe, it, expect } from 'vitest'

import { app } from '@/app'

describe('App', () => {
  it('responds with 200 and the welcome message on GET /', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello, World!' })
  })

  it('responds with 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown-route')
    expect(response.status).toBe(404)
  })
})
