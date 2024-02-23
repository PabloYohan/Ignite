import fs from 'node:fs/promises'

const dataBasePath = new URL('../db.json', import.meta.url)

export class DataBase {
  #database = {
  }

  constructor(){
    fs.readFile(dataBasePath, 'utf-8')
    .then((data) => this.#database = JSON.parse(data))
    .catch(() => {
      this.#persist()
  })
  }

  #persist(){
    fs.writeFile(dataBasePath, JSON.stringify(this.#database))
  }

  select(table){
    const data = this.#database[table] ?? []
    return data
  }

  insert(table, data){
    if(Array.isArray(this.#database[table])){
      this.#database[table].push(data)
    }else{
      this.#database[table] = [data]
    }

    this.#persist()
    return data
  }

  delete(table, id){
    const index = this.#database[table].findIndex((row) => row.id === id)
    if(index > -1){
      this.#database[table].splice(index, 1)
      this.#persist()
    }
  }

  update(table, id, data){
    const index = this.#database[table].findIndex((row) => row.id === id)

    if(index > -1){
      console.log(this.#database[table][index]);
      this.#database[table][index].title = data.title
      this.#database[table][index].description = data.description
      this.#persist()
    }
  }

  complete(table, id){
    const index = this.#database[table].findIndex((row) => row.id === id)

    if(index > -1){
      this.#database[table][index].completed_at = new Date().toLocaleDateString()
      this.#persist()
    }
  }
}