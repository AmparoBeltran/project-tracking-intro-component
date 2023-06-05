import styled from "styled-components";

export const MenuStyled = styled.menu`
  hr {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrayishBlue};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.colors.grayishBlue};
      background-color: ${({ theme }) => theme.colors.grayishBlue};
    }
  }

  .login {
    color: ${({ theme }) => theme.colors.grayishBlue};
  }

  @media (max-width: ${({ theme }) => theme.desktop}) {
    margin-inline: 2em;
    padding: 2em;
    background-color: white;
    position: absolute;
    top: 5em;
    left: 0;
    right: 0;
    display: ${({ open }) => (open ? "block" : "none")};
    box-shadow: 0px 18px 65px -22px ${({ theme }) => theme.colors.grayishBlue};
    border: none;
    border-radius: 10px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: block;
  }
  div {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1em;
    font-size: 1em;
    font-weight: 700;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: flex;
      align-items: center;
      text-align: center;
      gap: 3em;
      font-size: 1em;
    }
  }
`;
