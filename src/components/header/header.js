import { Container, ContainerIcone, Icone1, Icone2, Icones, Rodape, Site } from "./styled"
import { PiDogFill } from "react-icons/pi";
import { PiCatThin } from "react-icons/pi";
export function Header() {


    return(
        <>
        <Container>
           <ContainerIcone>
            <Icones>
                <Icone1>
                    <PiDogFill/>
                </Icone1>
                <Icone2>
                    <PiCatThin />
                </Icone2>
            </Icones>
            </ContainerIcone>
            <Site>Adote um amigo! </Site>
        </Container>
        <Rodape/>
        </>
    )
}
