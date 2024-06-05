import styled from "styled-components";
import backgroundImage from "./../../img/gatinhoInicial.jpeg";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`
export const SubContainerPrincipal = styled.div`
    width: 100%;
    height: auto;
`
export const ContainerIcones = styled.div`
    width: 30vw;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

`
export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Elipse = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Botao = styled.button`
    border-radius: 20px;
    width: 20vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF8F8;
`

export const ContainerTexto = styled.div`
    width: 20vw;
    height: auto;
    right: 0;
    top: 0;
`