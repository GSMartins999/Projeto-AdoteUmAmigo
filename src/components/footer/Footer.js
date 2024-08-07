import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import {
  Container,
  ContainerIcone,
  ContainerText,
  ContainerTexto,
  Icone1,
  Icones,
  TextDiv,
  TituloFooter,
} from "./styled";

export function Footer() {
  return (
      <Container>
        <ContainerIcone>
          <Icones>
            <Icone1>
              <IoLogoInstagram  style={{width: "90%", height: "90%", color: "white"}}/>
            </Icone1>
            <Icone1>
              <CiTwitter style={{width: "90%", height: "90%", color: "white"}}/>
            </Icone1>
            <Icone1>
              <FiFacebook style={{width: "90%", height: "90%", color: "white"}}/>
            </Icone1>
          </Icones>
        </ContainerIcone>
        <ContainerText>
          <TituloFooter>Adote Um Amigo:</TituloFooter>
          <ContainerTexto>
            <TextDiv>
              <p>
                Nosso instituto busca lares responsáveis para cães e gatos em
                situações de rua em todo o estado de Minas Gerais. Trabalhamos
                para conscientizar a populção sobre a importância da castração e
                posse responsável.
              </p>
            </TextDiv>
            <TextDiv>
              <p>
                O Adote um Amigo pode ser caracterizado com uma ONG que resgata,
                trata, castra e doa aniamais para tutores responsáveis que
                possuem lares seguros Nossa instituição conta com 3 unidades
                além da própia sede. Estamos nessa luta há mais de 5 anos.
              </p>
            </TextDiv>
          </ContainerTexto>
        </ContainerText>
      </Container>
  );
}
