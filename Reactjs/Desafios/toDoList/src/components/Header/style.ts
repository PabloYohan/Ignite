import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 4.5rem auto 3.3125rem;
  }

  form {
    display: flex;
    width: 46rem;
    gap: 0.5rem;
  }

  input {
    padding: 1rem;
    border-radius: 8px;
    font-size: 1rem;
    border: 1px solid ${(props) => props.theme['gray-700']};
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-300']};
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;
    border-radius: 8px;
    border: none;

    background-color: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};

    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme.blue};
  }
`
