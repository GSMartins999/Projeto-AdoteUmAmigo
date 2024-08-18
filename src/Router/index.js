import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TelaInicial } from "../pages/telaInicial/telaInicial"
import { TelaAdocao } from "../pages/telaAdocao/telaAdocao"
import { ErrorPage } from "../pages/ErrorPage/errorPage"
import { NossosAmiguinhos } from "../pages/nossosAmiguinhos/nossosAmiguinhos"
import { Navigate } from "react-router-dom"
import { ComoAdotar } from "../pages/comoadotar/comoadotar"
import { Condicoes } from "../pages/condicoes/condicoes"
import { Especiais } from "../pages/adocoesespeciais/adocoesespeciais"

export const Router = () => {
    return(

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicial/>}/>
                    <Route path="/adotar" element={<TelaAdocao/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/nossosamiguinhos" element={<NossosAmiguinhos/>}/>
                    <Route path="/adocoesespeciais" element={<Especiais/>}/>
                    <Route path="/condicoesparaadotar" element={<Condicoes/>}/>
                    <Route path="/comoadotar" element={<ComoAdotar/>}/>               

                    
                </Routes>
            </BrowserRouter>
        </>
    )
}