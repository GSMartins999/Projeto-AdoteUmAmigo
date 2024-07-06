import styled from "styled-components";

export const NavBar = styled.nav`
    width: 100vw;
    height: 10vh;
    background-color: white;
`
export const Main = styled.main`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: #FEEAEA;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

`

export const Elipse = styled.a`
    width: 50%;
    height: 50%;
    min-height: 30px;
    min-width: 30px;
    border-radius: 100%;
    background-color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;

`

export const Quadros = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 20%;
    min-width: 80px;
    max-width: auto;
    height: auto;
    min-height: 360px;
    gap: 10px;
    border: solid 2px #8B6969;
    padding-top: 20px;
    padding-bottom: 5px;
    background-color: white;
`
export const ContainerTextos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    color: #8B6969;
`

export const ContainerSaibaMais = styled.div`
    width: 80%;
    height: 50px;
    border: solid 2px #8B6969;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerTitulo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 90%;
    height: auto;
    min-height: 70px;
    max-height: 120px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #8B6969;
    flex-wrap: wrap;
`
export const H2 = styled.h2`
    width: 90%;
    max-width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    flex-direction: column;
`
export const TextosP = styled.p`
    color: #8B6969;
    width: 80%;
    text-align: center;
    min-height: 130px;
    max-height: 130px;
`

export const ContainerNav = styled.div`
    width: 100%; 
    height: 100%;
    padding-left: 20px;
    display: flex;
    justify-content: left;
    align-items: center;

`
export const TextoP = styled.p`
    color: brown;
    width: 20%;
    text-align: left;
`

export const SaibaMais = styled.p`
    color: #8B6969;
    width: 80%;
    text-align: center;
`

export const BotaoInicio = styled.button`
    background: none;
    border: none;
    border-bottom: 2px solid brown;
    cursor: pointer;
`