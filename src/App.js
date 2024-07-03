import { createGlobalStyle } from "styled-components";
import { TelaInicial } from "./components/telaInicial/telaInicial";

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
     <TelaInicial/>
    </>
  );
}

export default App;
