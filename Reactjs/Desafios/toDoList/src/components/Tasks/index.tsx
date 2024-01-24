import {
  CompletedTasks,
  CreatedTasks,
  TasksContainer,
  TasksCount,
  AllTasks,
} from './style'
import { EmptyTasks } from '../EmptyTasks/index'
import { Task, TaskProps } from '../Task/index'

interface TasksProps {
  tasks: TaskProps[]
  tasksCompleted: number
  countTaskCompleted: (value: number) => void
  deleteTask: (id: string) => void
}

export function Tasks({
  tasks,
  tasksCompleted,
  countTaskCompleted,
  deleteTask,
}: TasksProps) {
  const isEmpty = tasks.length === 0
  return (
    <TasksContainer>
      <TasksCount>
        <CreatedTasks>
          <p>Tarefas Criadas</p>
          <span>{tasks.length}</span>
        </CreatedTasks>

        {isEmpty ? (
          <CompletedTasks>
            <p>Concluídas</p>
            <span>0</span>
          </CompletedTasks>
        ) : (
          <CompletedTasks>
            <p>Concluídas</p>
            <span>{tasksCompleted + ' de ' + tasks.length}</span>
          </CompletedTasks>
        )}
      </TasksCount>
      <AllTasks>
        {isEmpty ? (
          <EmptyTasks />
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              countTaskCompleted={countTaskCompleted}
              deleteTask={deleteTask}
            />
          ))
        )}
      </AllTasks>
    </TasksContainer>
  )
}
