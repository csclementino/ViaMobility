import React from "react"
import "./comp.page.css"


type BotaoProps = {
    texto?: string;
    cor?: string;
    clicado?: () => void;
}

const Botao : React.FC <BotaoProps> = ({ 
    texto = "Click",
    clicado
}) =>{

    return(
        <>
            <button type="button" className="botaoGradienteVerdeAzul" onClick={ clicado }
            >{ texto }</button>
        </>
    )
}

export default Botao;