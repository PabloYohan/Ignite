import http from 'node:http'
import { DataBase } from './database'


const database = new DataBase();
const server = http.createServer((req, res) => {
  
  return res.writeHead(404).end()
})


server.listen(3333)