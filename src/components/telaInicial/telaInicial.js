import { Botao, Container, ContainerIcones, ContainerTexto, Elipse, Imagem, SubContainer, SubContainerPrincipal } from "./styled";
import { IoPawOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";



export function TelaInicial () {
    return(
        <>
            <Container>
            <SubContainerPrincipal>
             <ContainerIcones>
                <SubContainer>
                    <Elipse>
                        <IoPawOutline style={{height: '100px', width: '100px', color: 'white'}}/>                                
                    </Elipse>
                    <Botao><p style={{color: '#8B6969', fontSize: '1.2rem'}}>Adotar</p></Botao>
                </SubContainer>
                <SubContainer>
                    <Elipse>
                        <CiHeart style={{height: '100px', width: '100px', color: 'white'}}/>                                
                    </Elipse>
                    <Botao><p style={{color: '#8B6969', fontSize: '1.2rem'}}>Ajudar</p></Botao>
                </SubContainer>
                <SubContainer>
                    <Elipse>
                        <IoIosInformationCircleOutline style={{height: '100px', width: '100px', color: 'white'}}/>                                
                    </Elipse>
                    <Botao><p style={{color: '#8B6969', fontSize: '1.2rem'}}>Informações</p></Botao>
                </SubContainer>
             </ContainerIcones>
             <ContainerTexto>
                <h1 style={{color: 'white'}}>
                    Doe seu lar, adote um animalzinho.
                </h1>
             </ContainerTexto>
             </SubContainerPrincipal>
            </Container>
        </>
    );
}