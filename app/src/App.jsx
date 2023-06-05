import { ThemeProvider } from "styled-components"
import GlobalStyles from "./Global"
import MainContainer from "./components/MainContainer"
const theme = {
  colors: {

    //### Primary
    red: 'hsl(0, 100%, 68%)',

    //### Neutral
    veryDarkBlue: 'hsl(230, 29%, 20%)',
    darkGrayishBlue: 'hsl(230, 11%, 40%)',
    grayishBlue: 'hsl(231, 7%, 65%)',
    lightGrayishBlue: 'hsl(207, 33%, 95%)'
  },

  desktop: '1440px'
}
function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App


