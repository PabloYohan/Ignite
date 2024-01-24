import { PlusCircle } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './style'
import { Tasks } from '../Tasks'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { TaskProps } from '../Task'

export function Header() {
  const [tasksCompleted, setTasksCompleted] = useState(0)
  const [inputArea, setInputArea] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: String(new Date().getTime()),
      content:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      countTaskCompleted,
      deleteTask,
    },
  ])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks((state) => {
      return [
        ...state,
        {
          id: String(new Date().getTime()),
          content: inputArea,
          countTaskCompleted,
          deleteTask,
        },
      ]
    })
    setInputArea('')
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse Campo é Obrigatório')
  }

  function countTaskCompleted(value: number) {
    setTasksCompleted((state: number) => {
      return state + value
    })
  }

  function handleInputArea(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setInputArea(event.target.value)
  }

  function deleteTask(id: string) {
    setTasks((state) => {
      return [...state].filter((tasks) => tasks.id !== id)
    })
  }

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" />
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={inputArea}
            onChange={handleInputArea}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <button>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
      </HeaderContainer>
      <Tasks
        tasks={tasks}
        tasksCompleted={tasksCompleted}
        countTaskCompleted={countTaskCompleted}
        deleteTask={deleteTask}
      />
    </>
  )
}
