import { EmptyTasksContainer } from './style'
import Clipboard from '../../assets/Clipboard.svg'

export function EmptyTasks() {
  return (
    <EmptyTasksContainer>
      <img src={Clipboard} alt="" />
      <div>
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </EmptyTasksContainer>
  )
}
