import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TelaInicial } from "../pages/telaInicial/telaInicial"
import { TelaAdocao } from "../pages/telaAdocao/telaAdocao"
import { ErrorPage } from "../pages/ErrorPage/errorPage"
import { Navigate } from "react-router-dom"

export const Router = () => {
    return(

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicial/>}/>
                    <Route path="/adocao" element={<TelaAdocao/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}