import styled from "styled-components";


export const Main = styled.main`
    min-height: 100vh;
    width: 100vw;
    background-color: black;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 0;
    position: relative;

`
export const Container = styled.aside`
    width: 50%;
    position: absolute;
    left: 0;
    z-index: 1;
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const ImagemPrincipal = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: none;
`
export const SubContainerPrincipal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 30vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
`
export const ContainerIcones = styled.ul`
    display: flex;
    flex-direction: column;
    /* o flex direction define a posição do objeto, horizontal(columm) ou vertical(row)*/
    gap: 8px;

`
export const SubContainer = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Elipse = styled.a`
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
    cursor: pointer;
`

export const ContainerTexto = styled.aside`
    width: 50%;
    position: absolute;
    right: 40px;
    top: 80px;
    z-index: 1;
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: white;
`

export const SubContainerTexto = styled.div`
    color: white;
`
export const Textoh1 = styled.h1`
    color: white;
    text-indent: 220px;
    font-size: 3rem;
    font-family: 'Raleway';
`
export const Textoh1two = styled.h1`
    color: white;
    font-size: 3rem;
    font-family: 'Raleway';
`

export const ContainerTextoP = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 0;
`
export const Textop = styled.p`
    color: white;
    font-size: 1.2rem;
    flex-wrap: wrap;
    width: auto;    
    font-family: 'Raleway';
`