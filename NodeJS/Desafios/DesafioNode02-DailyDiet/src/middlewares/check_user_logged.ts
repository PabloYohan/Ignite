import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkUserLogged(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { userId } = request.cookies

  if (!userId) {
    return reply.status(403).send({
      error: "You're not loggin",
    })
  }
}
