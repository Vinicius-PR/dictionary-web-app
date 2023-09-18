import styled from "styled-components";

export const NoDefinitionContainer = styled.section`
  margin-top: 8.25rem;
  text-align: center;

  @media (max-width: 375px) {
      margin-top: 5rem;
  }

  h2 {
    margin: 2.75rem 0 1.5rem;
    
    @media (max-width: 375px) {
      margin: 2rem 0 1rem;
    }
  }
`