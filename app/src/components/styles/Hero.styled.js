import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  gap: 5em;
  overflow-x: hidden;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row-reverse;
    position: relative;
    align-items: center;
    top: 5em;
    gap: 7em;
  }

  img {
    width: 140%;
  }

  .card {
    display: flex;
    flex-direction: column;
    padding-inline: 2em;
    gap: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      position: relative;
      padding-inline-start: 15em;
    }
  }
  .new-feature {
    display: flex;
    gap: 1em;
    font-size: 1em;
    .new {
      color: white;
      background-color: ${({ theme }) => theme.colors.veryDarkBlue};
      border: none;
      border-radius: 50px;
      padding: 0.1em 0.6em;
      font-weight: 700;
    }
    span {
      color: ${({ theme }) => theme.colors.grayishBlue};
      letter-spacing: 0.2em;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: 2em;
    }
    h1 {
      line-height: 1;
      font-size: 2.5em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 5em;
        width: 600px;
      }
    }
    p {
      list-style: 1.3;
      font-size: 1.2em;
      color: ${({ theme }) => theme.colors.grayishBlue};
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.5em;
        width: 380px;
      }
    }
  }
  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin-top: 2em;
      justify-content: unset;
      gap: 1em;
      button {
        display: block;
        padding: 0.7em 2em;
      }
    }
    span {
      color: ${({ theme }) => theme.colors.grayishBlue};
      letter-spacing: 0.1em;
    }
  }
`;
