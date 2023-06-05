import styled from "styled-components";

export const NavigationStyled = styled.nav`
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding-top: 3em;
      padding-inline: 15em;
    }
  }

  .background {
    position: absolute;
    right: 0;
    z-index: -1;
    width: 50vw;
    height: 48vh;
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
    border: none;
    border-radius: 0 0 0 50px;
    background-size: cover;
  }
`;
