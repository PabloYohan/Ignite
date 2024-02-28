import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meal', (table) => {
    table.uuid('userId').unsigned()
    table.foreign('id').references('userId').inTable('users')
    table.uuid('id').primary()
    table.string('mealName').notNullable()
    table.string('mealDescription').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.boolean('isOnDiet').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meal')
}
