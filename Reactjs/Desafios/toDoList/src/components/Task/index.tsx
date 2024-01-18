import { TrashSimple } from 'phosphor-react'
import { InputContent, TaskContainer } from './style'
import { useState } from 'react'

export interface TaskProps {
  id: string
  content: string | null
}

export function Task({ id, content }: TaskProps) {
  const [checked, setChecked] = useState(false)

  function handleCheckedSwitch() {
    setChecked((state) => !state)
  }
  return (
    <TaskContainer>
      <InputContent>
        <input
          onChange={handleCheckedSwitch}
          type="checkbox"
          id={id}
          checked={checked}
        />
        <label onClick={handleCheckedSwitch} htmlFor={id}>
          {content}
        </label>
        <TrashSimple size={24} />
      </InputContent>
    </TaskContainer>
  )
}
