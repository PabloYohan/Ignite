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
  width: fit-content;
  input {
    opacity: 0;
    position: absolute;

    &:checked + label::before {
      content: '\2713';
      width: 1rem;
      height: 1rem;
      display: block;
      border-radius: 999px;
      background-color: ${(props) => props.theme['purple-dark']};
    }
  }

  label {
    display: flex;
    align-items: start;
    gap: 0.75rem;
  }

  label::before {
    content: '';
    width: 1rem;
    height: 1rem;
    display: block;
    border-radius: 999px;
    border: solid 2px ${(props) => props.theme.blue};
  }

  input:not(:checked):hover + label::before {
    background-color: ${(props) => props.theme['blue-dark']};
    opacity: 0.2;
  }

  svg:hover {
    color: ${(props) => props.theme.danger};
    cursor: pointer;
  }
`
