import fs from 'node:fs/promises'

const dataBasePath = new URL('../db.json', import.meta.url)

export class DataBase {
  #database = {
  }

  constructor(){
    fs.readFile(dataBasePath, 'utf-8')
    .then((data) => this.#database = JSON.parse(data))
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

    return data
  }
}