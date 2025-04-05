import React from "react"

type TituloAzulProps = { texto?: string }

const TituloAzul : React.FC <TituloAzulProps> = ({ 
    texto = "Titulo Azul",
}) =>{
    return (
        <h1 className="tituloAzul" style={{
            color: "#03FFF6",
            fontSize: "36px"}}>{ texto }</h1>
    )
}

export default TituloAzul