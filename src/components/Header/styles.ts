import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 3.6rem;
`

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.625rem; // 26px

  hr {
    width: 1px;
    height: 32px;
    border: none;
    background-color: #979797;
  }

  @media (max-width: 425px) {
    gap: 1rem;
  }
`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; // 20px

  @media (max-width: 425px) {
    gap: 0.75rem; //12px
  }
`

export const CustomSelect = styled.div`
  position: relative;
  font-weight: 700;
  .select-btn {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 1.5rem;
    cursor: pointer;
  }

  ul {
    position: absolute;
    z-index: 1;
    right: 0;
    width: 11.4rem;
    
    background-color: ${props => props.theme.name === 'light' ? '#FFFFFF' : '#1F1F1F'};
    box-shadow: 0px 5px 30px 0px ${props => props.theme.name === 'light' ? 'rgba(0, 0, 0, 0.10)' : '#A445ED'};

    border-radius: 16px;
    padding: 1.5rem 0 1.5rem 1.5rem;
    transform: scaleY(0);
    transition: transform 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
    transform-origin: top;
    overflow: hidden;
    top: 30px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      list-style: none;
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.colors.purple};
      }
    }

    &.active {
      transform: scaleY(1);
    }
  }

  @media (max-width: 425px) {
    span {
      font-size: 0.875rem; // 14px
    }
  }

`