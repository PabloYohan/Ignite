import styled from 'styled-components'

export const TasksContainer = styled.main`
  margin-top: 5.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CreatedTasks = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
  }

  span {
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-200']};
    padding: 2px 8px;
    border-radius: 999px;
    background-color: ${(props) => props.theme['gray-400']};
  }
`

export const CompletedTasks = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.purple};
    font-weight: bold;
  }

  span {
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-200']};
    padding: 2px 8px;
    border-radius: 999px;
    background-color: ${(props) => props.theme['gray-400']};
  }
`
export const TasksCount = styled.div`
  width: 46rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AllTasks = styled.div`
  margin-top: 1.5rem;
`
