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

  const idMealSchema = z.object({
    id: z.string().uuid(),
  })

  app.put('/:id', async (request, reply) => {
    const { userId } = request.cookies

    const { id } = idMealSchema.parse(request.params)

    const { description, isOnDiet, name } = mealSchema.parse(request.body)

    await knex('meal')
      .where({ id, userId })
      .update({ mealDescription: description, isOnDiet, mealName: name })

    return reply.status(204).send()
  })

  app.get(
    '/summary',
    {
      preHandler: [checkUserLogged],
    },
    async (request) => {
      const { userId } = request.cookies

      const totalMeals = await knex('meal')
        .where('userId', userId)
        .count('id', { as: 'total' })
        .first()

      const totalOnDiet = await knex('meal')
        .count('id', { as: 'total' })
        .where({
          userId,
          isOnDiet: true,
        })
        .first()

      const totalOffDiet = await knex('meal')
        .count('id', { as: 'total' })
        .where({
          userId,
          isOnDiet: false,
        })
        .first()

      const meals = await knex('meal')
        .select('*')
        .where({ userId })
        .orderBy('created_at')

      const { bestStreakOnDiet } = meals.reduce(
        (acc, meal) => {
          if (meal.isOnDiet) {
            acc.currentStreak += 1
          } else {
            acc.currentStreak = 0
          }

          if (acc.currentStreak > acc.bestStreakOnDiet) {
            acc.bestStreakOnDiet = acc.currentStreak
          }

          return acc
        },
        { bestStreakOnDiet: 0, currentStreak: 0 },
      )

      return {
        total: totalMeals?.total,
        onDiet: totalOnDiet?.total,
        offDiet: totalOffDiet?.total,
        bestStreakOnDiet,
      }
    },
  )

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
      const { userId } = request.cookies

      const { id } = idMealSchema.parse(request.params)

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
      const { userId } = request.cookies

      const { id } = idMealSchema.parse(request.params)

      await knex('meal').delete().where({
        id,
        userId,
      })

      return reply.status(204).send()
    },
  )
}
