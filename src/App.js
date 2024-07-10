import { createGlobalStyle } from "styled-components";
import { TelaInicial } from "./pages/telaInicial/telaInicial";
import { Router } from "./Router";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }
  body{
    padding: 0;
    margin: 0;
  }
`;

function App() {

  return (
    <>
    <GlobalStyle />
     <Router/>
    </>
  );
}

export default App;
