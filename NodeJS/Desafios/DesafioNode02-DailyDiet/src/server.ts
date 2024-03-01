import fastify from 'fastify'
import { UserRoutes } from './routes/users'
import cookie from '@fastify/cookie'
import { LoginRoutes } from './routes/login'
import { LogoutRoute } from './routes/logout'
import { MealRoutes } from './routes/meal'

const app = fastify()

app.register(cookie)

app.register(UserRoutes, {
  prefix: 'users',
})

app.register(LoginRoutes, {
  prefix: 'login',
})

app.register(LogoutRoute, {
  prefix: 'logout',
})

app.register(MealRoutes, {
  prefix: 'meals',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is Running!')
  })
