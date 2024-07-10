import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    min-height: 150px;
    height: auto;
    background-color: #FFC1C1;
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    justify-content: space-between;
    margin-top: 0;
`

export const ContainerIcone = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    gap: 5px;
`

export const Icones = styled.ul`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-left: 20px;
`

export const Icone1 = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: brown;
    list-style: none;
    background-color: brown;
    border-radius: 100%;
    padding: 2px;
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: auto;
    margin-right: 20px;
`

export const TituloFooter = styled.h2`
    color: white;
`

export const ContainerTexto = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    min-width: 100%;
    gap: 10px;
`
export const TextDiv = styled.div`
  flex: 1;
  min-width: 45%; 
`;