import { useNavigate } from "react-router-dom";
import { goToAdocao, goToPrincipal } from "../../Router/cordinator";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/header";
import {
  BotaoInicio,
  ContainerNav,
  ContainerSaibaMais,
  ContainerTextos,
  ContainerTitulo,
  Elipse,
  H2,
  Main,
  NavBar,
  Quadros,
  SaibaMais,
  TextoP,
  TextosP,
} from "../telaAdocao/styled";
import { TbPawFilled } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { LiaQuestionSolid } from "react-icons/lia";
import { GiSittingDog } from "react-icons/gi";



export const TelaAdocao = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <NavBar>
        <ContainerNav>
          <TextoP>
            <BotaoInicio name="Inicio" placeholder="Inicio" onClick={()=> goToPrincipal(navigate)}><p style={{color: "brown"}}>Inicio</p></BotaoInicio> &gt; <BotaoInicio name="Adotar" placeholder="Adotar" onClick={()=> goToAdocao(navigate)}><p style={{color: "brown"}}>Adotar</p></BotaoInicio>
          </TextoP>
        </ContainerNav>
      </NavBar>
      <Main>
        <Quadros>
          <Elipse>
            <TbPawFilled style={{width: "100%", height: "100%", color: "white"}}/>
          </Elipse>
          <ContainerTitulo>
            <H2>Nossos Amiguinhos</H2>
          </ContainerTitulo>
          <ContainerTextos>
            <TextosP>
              Conheça todos os cães e gatos que estão à espera de uma família.
            </TextosP>
          </ContainerTextos>
          <ContainerSaibaMais>
            <SaibaMais>Saiba Mais</SaibaMais>
          </ContainerSaibaMais>
        </Quadros>

        <Quadros>
          <Elipse>
            <GiSittingDog style={{width: "100%", height: "100%", color: "white"}}/>
          </Elipse>
          <ContainerTitulo>
            <H2>Adoções Especias</H2>
          </ContainerTitulo>
          <ContainerTextos>
            <TextosP>
              Eles também merecem um lar. Conhceça nossos animais especias.
            </TextosP>
          </ContainerTextos>
          <ContainerSaibaMais>
            <SaibaMais>Saiba Mais</SaibaMais>
          </ContainerSaibaMais>
        </Quadros>

        <Quadros>
          <Elipse>
            <LiaQuestionSolid style={{width: "100%", height: "100%", color: "white"}}/>
          </Elipse>
          <ContainerTitulo>
            <H2>Condições Para Adoção</H2>
          </ContainerTitulo>
          <ContainerTextos>
            <TextosP>
              Você está realmente apto para adotar?? Leia as cláusulas
              necessárias para uma adoção.
            </TextosP>
          </ContainerTextos>
          <ContainerSaibaMais>
            <SaibaMais>Saiba Mais</SaibaMais>
          </ContainerSaibaMais>
        </Quadros>

        <Quadros>
        <Elipse>
            <IoNewspaperOutline style={{width: "100%", height: "100%", color: "white"}}/>
          </Elipse>
          <ContainerTitulo>
            <H2>Como Adotar</H2>
          </ContainerTitulo>
          <ContainerTextos>
            <TextosP>
              Conheça aqui o passo a passo para realizar sua adoção.
            </TextosP>
          </ContainerTextos>
          <ContainerSaibaMais>
            <SaibaMais>Saiba Mais</SaibaMais>
          </ContainerSaibaMais>
        </Quadros>
      </Main>
      <Footer />
    </>
  );
};
