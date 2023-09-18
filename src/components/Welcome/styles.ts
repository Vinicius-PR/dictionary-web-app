import styled from "styled-components";

export const WelcomeContainer = styled.section`
  text-align: center;
  h1 {
    margin: 2rem 0;
    span {
      color: ${props => props.theme.colors.purple};
    }
  }
`