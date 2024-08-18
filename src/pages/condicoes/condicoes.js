import { Nav } from "../../components/containerNav/containerNav"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/header"
import { Container, ContainerTexto, Lista, Pa } from "./styled"


export const Condicoes = () => {
    return(
        <>
            <Header/>
            <Nav/>
            <Container>
                <ContainerTexto>
            <Pa>Adotar um animal é uma decisão importante que requer responsabilidade e comprometimento. As condições para adoção de animais podem variar dependendo do país, estado, ou até mesmo da organização ou abrigo que está facilitando a adoção. No entanto, algumas condições comuns incluem:</Pa><br/>

<Lista>
  <li><strong>Idade Mínima:</strong> Muitas organizações exigem que o adotante tenha uma idade mínima, geralmente 18 anos ou mais, para adotar um animal.</li>
  <li><strong>Entrevista e Visita Domiciliar:</strong> Algumas organizações realizam uma entrevista com o potencial adotante para entender melhor seu estilo de vida, suas expectativas e sua experiência com animais. Pode ser necessária uma visita domiciliar para garantir que o ambiente é seguro e adequado para o animal.</li>
  <li><strong>Condições de Moradia:</strong> A moradia deve ser adequada para o tipo de animal que está sendo adotado. Por exemplo, um cão grande pode precisar de um quintal ou espaço para se exercitar. Em apartamentos ou casas alugadas, pode ser necessário apresentar uma autorização do proprietário permitindo a presença de animais.</li>
  <li><strong>Compromisso Financeiro:</strong> O adotante deve estar preparado para os custos financeiros de cuidar de um animal, incluindo alimentação, cuidados veterinários, vacinas, entre outros.</li>
  <li><strong>Disponibilidade de Tempo:</strong> O adotante deve ter tempo suficiente para se dedicar ao animal, incluindo tempo para passeios, brincadeiras e socialização. Alguns abrigos podem questionar sobre a rotina do adotante para garantir que o animal não será negligenciado.</li>
  <li><strong>Outros Animais na Casa:</strong> Se o adotante já possui outros animais, pode ser necessário verificar se eles são compatíveis com o novo animal. Alguns abrigos exigem que os animais residentes sejam levados para um encontro supervisionado com o possível novo membro.</li>
  <li><strong>Contrato de Adoção:</strong> O adotante geralmente precisa assinar um contrato de adoção, que pode incluir cláusulas como a devolução do animal ao abrigo se o adotante não puder mais cuidar dele, e a obrigação de castração, se isso ainda não tiver sido feito.</li>
  <li><strong>Taxa de Adoção:</strong> Muitos abrigos e organizações cobram uma taxa de adoção, que ajuda a cobrir os custos de cuidados com o animal, como vacinação, castração, e outros cuidados médicos.</li>
  <li><strong>Critérios Específicos:</strong> Algumas raças ou tipos de animais podem ter critérios específicos para adoção. Por exemplo, animais que precisam de cuidados especiais ou têm temperamento difícil podem exigir adotantes mais experientes.</li>
  <li><strong>Compromisso com a Castração:</strong> Se o animal ainda não foi castrado, a organização pode exigir que o adotante se comprometa a castrar o animal dentro de um determinado período.</li>
  <li><strong>Referências:</strong> Algumas organizações podem pedir referências pessoais ou veterinárias para garantir que o adotante é responsável e tem experiência com animais.</li>
  <li><strong>Período de Adaptação:</strong> Pode ser oferecido um período de adaptação, onde o adotante pode devolver o animal se a adoção não der certo, sem penalidades.</li>
</Lista><br/>

<Pa>Essas condições são estabelecidas para garantir que o animal adotado vá para um lar seguro e amoroso, e que o adotante esteja ciente das responsabilidades envolvidas.</Pa>

</ContainerTexto>
            </Container>
            <Footer/>
        </>
    )
}