import styled from 'styled-components'

export const EmptyTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 46rem;
  padding: 4rem 1.5rem;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  div {
    text-align: center;
    color: ${(props) => props.theme['gray-300']};
  }

  h3 {
    font-weight: bold;
    font-size: 1rem;
  }

  p {
    font-weight: normal;
    font-size: 1rem;
  }
`
