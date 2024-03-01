// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      name: string
      email: string
    }

    meal: {
      id: string
      mealName: string
      userId: string
      mealDescription: string
      created_at: Date
      isOnDiet: boolean
    }
  }
}
