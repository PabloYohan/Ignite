import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'

export async function UserRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const users = await knex('users').select('*')

    return {
      users,
    }
  })

  app.post('/users', async (request, reply) => {
    const userSchema = z.object({
      name: z.string(),
      email: z.string().email(),
    })

    const { name, email } = userSchema.parse(request.body)

    await knex('users').insert({
      email,
      name,
      id: randomUUID(),
    })

    return reply.status(201).send()
  })
}
