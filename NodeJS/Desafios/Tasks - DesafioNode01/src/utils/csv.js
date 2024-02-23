import { parse } from 'csv-parse'
import fs from 'fs' 

const csvPath = new URL('../../tasks.csv', import.meta.url)

export async function upload(req, res){
  const Parser = parse()
  const document = fs.createReadStream(csvPath, 'utf-8')

  const tasks = []

  document.pipe(Parser)

  for await (const chunk of Parser){
    if(chunk[0] !== 'title'){
      const body = {
        title: chunk[0],
        description: chunk[1]
      }
    
      tasks.push(JSON.stringify(body))
    }
  }

  for await (const task of tasks){
    await fetch('http://localhost:3333/tasks',{
      method: "POST",
      body: task,
    })
  }
  
  return res.end()
}