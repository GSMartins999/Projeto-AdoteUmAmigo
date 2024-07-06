import { Botao, Container, ContainerIcones, ContainerTexto, ContainerTextoP, Elipse, Main, SubContainer, SubContainerTexto, Textoh1, Textoh1two, Textop } from "./styled";
import { IoPawOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import gatinhoInicial from "./../../img/gatinhoInicial.jpeg"
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import { goToAdocao } from "../../Router/cordinator";


export function TelaInicial () {

    const navigate = useNavigate();

    return(
        <>
        <Header/>
        <Main>
            <img src={gatinhoInicial} style={{width: '100vw', height: '100vh', objectFit: 'cover', zIndex: "0"}} alt="gatinho"/>

            <Container>
                    <ContainerIcones>
                        <SubContainer>
                            <Elipse>
                                <IoPawOutline style={{height: '100px', width: '100px', color: 'white'}}/>
                            </Elipse>
                            <Botao onClick={() => goToAdocao(navigate)}><p style={{color: 'brown', fontSize: '1.2rem'}}>Adotar</p></Botao> 
                        </SubContainer>
                    </ContainerIcones>

                    <ContainerIcones>
                        <SubContainer>
                            <Elipse>
                                <CiHeart  style={{height: '100px', width: '100px', color: 'white'}}/>
                            </Elipse>
                            <Botao><p style={{color: 'brown', fontSize: '1.2rem'}}>Ajudar</p></Botao> 
                        </SubContainer>
                    </ContainerIcones> 
                    
                    <ContainerIcones>
                        <SubContainer>
                            <Elipse>
                                <IoIosInformationCircleOutline  style={{height: '100px', width: '100px', color: 'white'}}/>
                            </Elipse>
                            <Botao><p style={{color: 'brown', fontSize: '1.2rem'}}>Informações</p></Botao> 
                        </SubContainer>
                    </ContainerIcones>
            </Container>
            
            <ContainerTexto>
                <SubContainerTexto>
                        <Textoh1>
                        Doe seu lar,
                        </Textoh1>    
                        <Textoh1two>
                            adote um animalzinho.
                        </Textoh1two>               
                        <ContainerTextoP>             
                            <Textop>Adoções somente 
                            para Minas Gerias.</Textop>
                        </ContainerTextoP>   
                </SubContainerTexto>
            </ContainerTexto>
        </Main>
        <Footer/>
        </>
    );
}