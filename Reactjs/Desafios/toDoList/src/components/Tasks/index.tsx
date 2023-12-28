import { useState } from 'react'
import {
  CompletedTasks,
  CreatedTasks,
  TasksContainer,
  TasksCount,
  AllTasks,
} from './style'
import { EmptyTasks } from '../EmptyTasks/index'

export function Tasks() {
  const [tasks, setTasks] = useState(0)

  const isEmpty = tasks === 0
  return (
    <TasksContainer>
      <TasksCount>
        <CreatedTasks>
          <p>Tarefas Criadas</p>
          <span>0</span>
        </CreatedTasks>
        <CompletedTasks>
          <p>Concluídas</p>
          <span>0</span>
        </CompletedTasks>
      </TasksCount>
      <AllTasks>{isEmpty ? <EmptyTasks /> : <h1>Tasks</h1>}</AllTasks>
    </TasksContainer>
  )
}
