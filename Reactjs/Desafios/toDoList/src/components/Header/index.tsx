import { PlusCircle } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </HeaderContainer>
  )
}
