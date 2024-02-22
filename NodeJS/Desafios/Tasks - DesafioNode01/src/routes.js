import { randomUUID } from 'node:crypto'
import { DataBase } from "./database.js"
import { buildPath } from './utils/build-path.js'

const database = new DataBase()

export const routes = [{
  method: "GET",
  path: buildPath("/tasks"),
  handler: (req, res) => {
    const tasks = database.select(tasks)

    return res.end(JSON.stringify(tasks))
  },
},
{
  method: "POST",
  path: buildPath("/tasks"),
  handler: (req, res) => {
    const { title, description } = req.body

    const createdDate = new Date().toLocaleDateString()

    const data = {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: createdDate,
      updated_at: null
    }

    database.insert('tasks', data)

    res.writeHead(201).end()
  }
},{
  method: "DELETE",
  path: buildPath('/tasks/:id'),
  handler: (req, res) => {
    const { id } = req.params


  }
}]