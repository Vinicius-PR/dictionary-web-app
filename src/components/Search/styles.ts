import styled from "styled-components";

interface SearchContainerProps {
  $isemptyerror: boolean
}

export const SearchContainer = styled.section<SearchContainerProps>`
  width: 100%;
  height: 4rem;
  border: 1px solid;
  border-radius: 16px;
  padding: 0 1.5rem;
  background-color: ${props => props.theme.colors.searchColorBack};
  margin-top: 3.2rem;
  border-color: ${props => props.$isemptyerror ? props.theme.colors.red : 'transparent'};

  &:has(input:focus) {
    border-color: ${props => !props.$isemptyerror && props.theme.colors.purple};
  }

  form {
    display: flex;
    justify-content: space-between;
    height: 100%; 
    
    input {
      border-radius: 16px;
      flex: 1;
      border: none;
      outline: none;
      font-size:1.25rem; // 20px
      font-style: normal;
      font-weight: 700;
      background-color: transparent;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 425px) {
    form {
      input {
        font-size: 1rem;
      }
    }
  }
`

export const SpanError = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.red};
`