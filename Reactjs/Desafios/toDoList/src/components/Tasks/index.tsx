import { useState } from 'react'
import {
  CompletedTasks,
  CreatedTasks,
  TasksContainer,
  TasksCount,
  AllTasks,
} from './style'
import { EmptyTasks } from '../EmptyTasks/index'
import { Task, TaskProps } from '../Task/index'

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: String(new Date().getTime),
      content:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
  ])

  const isEmpty = tasks.length === 0
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
      <AllTasks>
        {isEmpty ? (
          <EmptyTasks />
        ) : (
          tasks.map((task) => (
            <Task key={task.id} id={task.id} content={task.content} />
          ))
        )}
      </AllTasks>
    </TasksContainer>
  )
}
