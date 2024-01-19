import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const CountdownBaseButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CountdownStartButton = styled(CountdownBaseButton)`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const CountdownStopButton = styled(CountdownBaseButton)`
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
