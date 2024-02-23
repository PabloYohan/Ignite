import { randomUUID } from 'node:crypto'
import { DataBase } from "./database.js"
import { buildPath } from './utils/build-path.js'
import { upload } from './utils/csv.js'

const database = new DataBase()

export const routes = [{
  method: "GET",
  path: buildPath("/tasks"),
  handler: (req, res) => {
    const tasks = database.select('tasks')

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

    return res.writeHead(201).end()
  }
},{
  method: "DELETE",
  path: buildPath('/tasks/:id'),
  handler: (req, res) => {
    const { id } = req.params
    database.delete('tasks', id)
    return res.writeHead(204).end()
  }
},
{
  method: "POST",
  path: buildPath('/upload'),
  handler: (req, res) => upload(req, res)
},
{
  method: "PUT",
  path: buildPath('/tasks/:id'),
  handler: (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    database.update('tasks', id, {title, description, created_at: new Date().toLocaleDateString()})
    return res.writeHead(204).end()
  }
},
{
  method: "PATCH",
  path: buildPath('/tasks/:id/complete'),
  handler: (req, res) => {
    const { id } = req.params
    database.complete('tasks', id)
    return res.writeHead(204).end()
  }
}
]