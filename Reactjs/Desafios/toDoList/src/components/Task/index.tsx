import { TrashSimple } from 'phosphor-react'
import { InputContent, TaskContainer } from './style'
import { useState } from 'react'

export interface TaskProps {
  id: string
  content: string | null
  countTaskCompleted: (value: number) => void
  deleteTask: (id: string) => void
}

export function Task({
  id,
  content,
  countTaskCompleted,
  deleteTask,
}: TaskProps) {
  const [checked, setChecked] = useState(false)

  function handleCheckedSwitch() {
    setChecked((state) => !state)
    if (checked) {
      countTaskCompleted(-1)
    } else {
      countTaskCompleted(1)
    }
  }
  function handleDeleteTask() {
    deleteTask(id)
    countTaskCompleted(-1)
  }

  return (
    <TaskContainer>
      <InputContent>
        <input
          onClick={handleCheckedSwitch}
          id={id}
          type="checkbox"
          defaultChecked={checked}
        />
        <label htmlFor={id}>{content}</label>
        <TrashSimple size={24} onClick={handleDeleteTask} />
      </InputContent>
    </TaskContainer>
  )
}
