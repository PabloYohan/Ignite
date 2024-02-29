import fastify from 'fastify'
import { UserRoutes } from './routes/users'
import cookie from '@fastify/cookie'
import { LoginRoutes } from './routes/login'

const app = fastify()

app.register(cookie)

app.register(UserRoutes, {
  prefix: 'users',
})

app.register(LoginRoutes, {
  prefix: 'login',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is Running!')
  })
