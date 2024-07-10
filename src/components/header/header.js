import { Container, ContainerIcone, Icone1, Icone2, Icones, Rodape, Site } from "./styled"
import { PiDogFill } from "react-icons/pi";
import { PiCatThin } from "react-icons/pi";
import { goToPrincipal } from "../../Router/cordinator";
import { useNavigate } from "react-router-dom";
export function Header() {

    const navigate = useNavigate()

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
            <Site><a onClick={() => goToPrincipal(navigate)} style={{cursor: "pointer"}}>Adote um amigo! </a></Site>
        </Container>
        <Rodape/>
        </>
    )
}
