import { useLocation, useNavigate } from "react-router-dom";
import { BotaoInicio, ContainerNav, TextoP } from "./styled";
import {
  goToAdocao,
  goToNossosAmiguinhos,
  goToPrincipal,
} from "../../Router/cordinator";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const page = () => {
    if (location.pathname === "/adotar") {
      return (
        <>
          <BotaoInicio
            name="Inicio"
            placeholder="Inicio"
            onClick={() => goToPrincipal(navigate)}
          >
            <p style={{ color: "brown" }}>Inicio</p>
          </BotaoInicio>
          <span> &gt; </span>
          <BotaoInicio
            name="Adotar"
            placeholder="Adotar"
            onClick={() => goToAdocao(navigate)}
          >
            <p style={{ color: "brown" }}>Adotar</p>
          </BotaoInicio>
        </>
      );
    } else if (location.pathname === "/nossosamiguinhos") {
      return (
        <>
          <BotaoInicio
            name="Inicio"
            placeholder="Inicio"
            onClick={() => goToPrincipal(navigate)}
          >
            <p style={{ color: "brown" }}>Inicio</p>
          </BotaoInicio>
          <span> &gt; </span>
          <BotaoInicio
            name="Adotar"
            placeholder="Adotar"
            onClick={() => goToAdocao(navigate)}
          >
            <p style={{ color: "brown" }}>Adotar</p>
          </BotaoInicio>
          <span> &gt; </span>
          <BotaoInicio
            name="nossosamiguinhos"
            placeholder="Nossos Amiguinhos"
            onClick={() => goToNossosAmiguinhos(navigate)}
          >
            <p style={{ color: "brown" }}>Nossos Amiguinhos</p>
          </BotaoInicio>
        </>
      );
    } else if (location.pathname === "/adocoesespeciais") {
        return (
          <>
            <BotaoInicio
              name="Inicio"
              placeholder="Inicio"
              onClick={() => goToPrincipal(navigate)}
            >
              <p style={{ color: "brown" }}>Inicio</p>
            </BotaoInicio>
            <span> &gt; </span>
            <BotaoInicio
              name="Adotar"
              placeholder="Adotar"
              onClick={() => goToAdocao(navigate)}
            >
              <p style={{ color: "brown" }}>Adotar</p>
            </BotaoInicio>
            <span> &gt; </span>
            <BotaoInicio
              name="adocoesespeciais"
              placeholder="Adoções Especiais"
              onClick={() => goToNossosAmiguinhos(navigate)}
            >
              <p style={{ color: "brown" }}>Adoções Especiais</p>
            </BotaoInicio>
          </>
        );
  } else if (location.pathname === "/condicoesparaadotar") {
    return (
      <>
        <BotaoInicio
          name="Inicio"
          placeholder="Inicio"
          onClick={() => goToPrincipal(navigate)}
        >
          <p style={{ color: "brown" }}>Inicio</p>
        </BotaoInicio>
        <span> &gt; </span>
        <BotaoInicio
          name="Adotar"
          placeholder="Adotar"
          onClick={() => goToAdocao(navigate)}
        >
          <p style={{ color: "brown" }}>Adotar</p>
        </BotaoInicio>
        <span> &gt; </span>
        <BotaoInicio
          name="condicoesparaadotar"
          placeholder="Condições Para Adoção"
          onClick={() => goToNossosAmiguinhos(navigate)}
        >
          <p style={{ color: "brown" }}>Condições Para Adoção</p>
        </BotaoInicio>
      </>
    );
    } else if (location.pathname === "/comoadotar") {
            return (
              <>
                <BotaoInicio
                  name="Inicio"
                  placeholder="Inicio"
                  onClick={() => goToPrincipal(navigate)}
                >
                  <p style={{ color: "brown" }}>Inicio</p>
                </BotaoInicio>
                <span> &gt; </span>
                <BotaoInicio
                  name="Adotar"
                  placeholder="Adotar"
                  onClick={() => goToAdocao(navigate)}
                >
                  <p style={{ color: "brown" }}>Adotar</p>
                </BotaoInicio>
                <span> &gt; </span>
                <BotaoInicio
                  name="comoadotar"
                  placeholder="Como adotar"
                  onClick={() => goToNossosAmiguinhos(navigate)}
                >
                  <p style={{ color: "brown" }}>Como adotar</p>
                </BotaoInicio>
              </>
            );
    } else {
        return ("Error!!!")
    }
}

  return (
    <>
      <ContainerNav>
        <TextoP>
        {page()}
        </TextoP>
      </ContainerNav>
    </>
  );
};
