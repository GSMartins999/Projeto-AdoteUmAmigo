import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: justify;
`
export const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    text-align: justify;
`



export const slideDown = keyframes`
    from{
        opacity: 0;
        transform: translateY(-20px);
    } to {
        opacity: 1;
        transform: translateY(0);
    }
` 

export const Pa = styled.p`
    font-size: 1.2rem;
    color: black;
    animation: ${slideDown} 1s ease-out forwards;
`

export const Lista = styled.ol`
    gap: 5px;
    animation: ${slideDown} 1s ease-out forwards;
`
