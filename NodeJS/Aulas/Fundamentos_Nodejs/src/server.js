import http from 'node:http'

const users = []

const server = http.createServer( (req, res) => {
  const {method, url} = req

  if(method === 'GET' && url === '/users'){
    return res
    .setHeader('Content-type', 'aplication/json')
    .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: 'Jonh Doe',
      email: 'jonhdoe@example.com'
    })

    return res.end('Criação de usuario')
  }

  return res.end("Hello Iginte");
})

server.listen(3333);