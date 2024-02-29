import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'

export async function LoginRoutes(app: FastifyInstance) {
  const loginSchema = z.object({
    email: z.string().email(),
    name: z.string(),
  })

  app.post('/', async (request, reply) => {
    const { userId } = request.cookies

    if (userId) {
      return reply.status(403).send({
        error: 'Already Logged In User',
      })
    }

    const { email, name } = loginSchema.parse(request.body)

    const newUserId = await knex('users')
      .where({
        email,
        name,
      })
      .select('*')

    if (!newUserId) {
      return reply.status(404).send({
        error: 'User not found.',
      })
    }

    const { id } = newUserId[0]

    reply.cookie('userId', id, {
      path: '/',
      maxAge: 60 * 60 * 24,
    })
  })
}
