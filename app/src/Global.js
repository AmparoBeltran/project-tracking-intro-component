import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }
    
  
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  /* max-width: 100%; */
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

  body {
    display: grid;
    min-height: 100vh;
    width: 100vw;
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    text-align: left;
}

h1, span, button, a{
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
}

a{
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.veryDarkBlue};
&:hover{
  text-decoration: underline;
}
  }

button{
    background-color: transparent;
    border: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
}

.cta button{
  cursor: pointer;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.lightGrayishBlue};
    border: none;
    border-radius: 5px;
    padding: 0.5em 1.5em;
    font-weight: 700;

    &:hover{
        opacity: 0.5;
    }
}
`;

export default GlobalStyles;
