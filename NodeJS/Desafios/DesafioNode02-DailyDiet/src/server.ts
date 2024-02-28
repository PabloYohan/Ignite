import fastify from 'fastify'
import { UserRoutes } from './routes/users'

const app = fastify()

app.register(UserRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is Running!')
  })
