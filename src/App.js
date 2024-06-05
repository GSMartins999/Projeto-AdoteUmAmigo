import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/header";
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
     <Header/>
     <TelaInicial/>
     <Footer/>
    </>
  );
}

export default App;
