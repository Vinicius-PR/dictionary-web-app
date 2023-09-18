import styled from "styled-components";

export const ResultContainer = styled.section`
  margin-top: 2.8rem;
  margin-bottom: 5rem;
`

export const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 375px) {
      font-size: 2rem;
    }
  }

  span {
    display: inline-block;
    margin-top: 0.6875rem;
    color: ${props => props.theme.colors.purple};
    font-size: 1.5rem;

    @media (max-width: 375px) {
      font-size: 1.25rem;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    width: 4.7rem;
    height: 4.7rem;

    @media (max-width: 375px) {
      width: 3rem;
      height: 3rem;
    }
    
    svg {
      circle, path {
        transition: all 0.1s linear;
      }
      width: 100%;
      height: 100%;
    }

    &:hover {
      svg {
        circle {
          opacity: unset;
        }

        path {
          fill: white;
        }
      }
    }
  }

  em {
    color: ${props => props.theme.colors.red};
    font-weight: 700;
  }
`

export const MeaningBox = styled.div`
  margin-top: 2.5rem;
`

export const MeaningHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  hr {
    flex: 1;
  }

  h2 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 375px) {
      font-size: 1.25rem;
    }
  }
`

export const Meaning = styled.div`
  margin-top: 2.75rem;

  h3 {
    color: ${props => props.theme.colors.subText};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 375px) {
      font-size: 1rem;
    }
  }

  ul {
    margin-top: 1.5625rem;
    margin-left: 1.375rem;

    li {
      list-style: none;
      font-size: 1.125rem;
      @media (max-width: 375px) {
        font-size: 0.9375rem;
      }

      &::before {
        content: '\\2022';
        color: ${props => props.theme.colors.purple};
        margin-right: 1.25rem;
      }

      q {
        display: block;
        margin-top: 13px;
        margin-left: 1.5625rem;
        color: ${props => props.theme.colors.subText};
      }
    }
    li + li {
      margin-top: 0.8125rem;
    }
  }
`

export const SynonymsDiv = styled.div`
  display: flex;
  margin-top: 4rem;

  h3 {
    margin-right: 1.375rem;
  }

  span {
    color: ${props => props.theme.colors.purple};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 375px) {
    h3 {
      margin-right: 0.5rem;
    }
    span {
      font-size: 1rem;
    }
  }
  
`


export const SourceBox = styled.div`
  hr {
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
  }
  
  & > div {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    word-break: break-all;

    p {
      color: ${props => props.theme.colors.subText};
    }

    div {
      display: flex;
      gap: 0.5rem;

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 375px) {
    p {
      text-decoration: underline;
    }

    div{
      div {
        a {
          text-decoration: underline;
        }
      }
    }
  }
`