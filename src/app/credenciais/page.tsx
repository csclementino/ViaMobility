import Link from "next/link";
import Formulario from "@/components/formulario/Formulario";
import TituloAzul from "@/components/TituloAzul/page";
import "./credenciais.css"
import Footer from "@/components/Footer/page";

export default function Credenciais() {
  return (
    <>
      <div className="titulo"></div>
      <TituloAzul texto="Insira suas credenciais"></TituloAzul>
      <Formulario />
      <Footer>      
      <Link href="/cadastrar">Criar uma conta</Link>
      <br></br>
      <Link href="/esqueceu_senha">Esqueceu a senha?</Link>
      </Footer>      
      
    </>
  )
}