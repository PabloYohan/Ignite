import { Outlet } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { CartContainer, HeaderContainer, LocaleContainer } from './defaultStyle'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt=""></img>
        <div>
          <LocaleContainer>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocaleContainer>
          <CartContainer>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </CartContainer>
        </div>
      </HeaderContainer>
      <Outlet />
    </>
  )
}
