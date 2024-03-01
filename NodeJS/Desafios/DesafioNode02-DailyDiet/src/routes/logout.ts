import { FastifyInstance } from 'fastify'

export async function LogoutRoute(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const { userId } = request.cookies

    if (!userId) {
      return reply.status(403).send({ error: 'No has a User Logged' })
    }

    reply.clearCookie('userId')
  })
}
