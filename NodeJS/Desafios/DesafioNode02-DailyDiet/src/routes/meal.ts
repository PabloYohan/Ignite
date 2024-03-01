import { z } from 'zod'
import { knex } from '../database'
import { FastifyInstance } from 'fastify'
import { randomUUID } from 'crypto'
import { checkUserLogged } from '../middlewares/check_user_logged'

export async function MealRoutes(app: FastifyInstance) {
  const mealSchema = z.object({
    name: z.string(),
    description: z.string(),
    isOnDiet: z.boolean(),
  })

  app.post(
    '/',
    {
      preHandler: [checkUserLogged],
    },
    async (request, reply) => {
      const { userId } = request.cookies

      const { name, description, isOnDiet } = mealSchema.parse(request.body)

      await knex('meal').insert({
        mealDescription: description,
        mealName: name,
        isOnDiet,
        userId,
        id: randomUUID(),
      })

      await reply.status(201).send()
    },
  )

  app.get(
    '/',
    {
      preHandler: [checkUserLogged],
    },
    async (request) => {
      const { userId } = request.cookies

      const meals = await knex('meal').where('userId', userId).select('*')

      return {
        meals,
      }
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkUserLogged],
    },
    async (request) => {
      const getMealSchema = z.object({
        id: z.string().uuid(),
      })
      const { userId } = request.cookies

      const { id } = getMealSchema.parse(request.params)

      const meal = await knex('meal')
        .select('*')
        .where({
          userId,
          id,
        })
        .first()

      return {
        meal,
      }
    },
  )

  app.delete(
    '/:id',
    {
      preHandler: [checkUserLogged],
    },
    async (request, reply) => {
      const deleteMealSchema = z.object({
        id: z.string().uuid(),
      })
      const { userId } = request.cookies

      const { id } = deleteMealSchema.parse(request.params)

      await knex('meal').delete().where({
        id,
        userId,
      })
    },
  )
}
