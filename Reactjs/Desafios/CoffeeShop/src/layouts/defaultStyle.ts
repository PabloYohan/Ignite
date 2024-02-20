import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
  div {
    display: flex;
    gap: 0.75rem;
  }
`
export const CartContainer = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  max-height: 2.375rem;
`
