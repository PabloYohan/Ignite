import styled from 'styled-components'

export const TaskContainer = styled.div`
  padding: 1rem;
  min-height: 4.5rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  width: 46rem;
  background-color: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;
  line-height: 1.4;
`

export const InputContent = styled.div`
  display: flex;
  gap: 0.75rem;
  width: inherit;
  input {
    opacity: 0;
    position: absolute;
  }

  label {
    display: flex;
    align-items: start;
    width: 41.5rem;
    gap: 0.75rem;
  }

  input:checked + label {
    text-decoration: line-through;
  }

  input:not(:checked) + label::before {
    content: '';
    width: 1rem;
    height: 1rem;
    display: block;
    border-radius: 999px;
    border: solid 2px ${(props) => props.theme.blue};
  }

  input:checked + label::before {
    content: ' ';
    width: 1rem;
    height: 1rem;
    display: block;
    border-radius: 999px;
    background-color: ${(props) => props.theme['purple-dark']};
    border: 2px solid ${(props) => props.theme['purple-dark']};
  }

  input:not(:checked):hover + label::before {
    background-color: ${(props) => props.theme['blue-dark']};
    opacity: 0.2;
  }

  input:checked:hover + label::before {
    background-color: ${(props) => props.theme.purple};
    border: 2px solid ${(props) => props.theme.purple};
  }

  svg:hover {
    color: ${(props) => props.theme.danger};
    cursor: pointer;
    justify-self: end;
  }
`
