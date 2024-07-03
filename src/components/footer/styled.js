import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    min-height: 100px;
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

export const Icone1 = styled.li`
    font-size: 2rem;
    color: brown;
    list-style: none;
    border-radius: 50%;
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
  flex: 1; /* Faz com que as divs ocupem o mesmo espaço */
  min-width: 45%; /* Define uma largura mínima para as divs */
`;