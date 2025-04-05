import Link from "next/link";
import Botao from "@/components/botaoGradienteVerdeAzul/page"
import TituloAzul from "@/components/TituloAzul/page"
import '@/app/globals.css'
import Header from "@/components/Header/page"
import Footer from "@/components/Footer/page"

export default function Login() {
    return (
      <>
        <Header>
          <TituloAzul texto="Bem-vindo(a)!"></TituloAzul>
          <br></br>
          <h2>Comece sua viagem</h2>
        </Header>
        <Footer>
          <Link href="/credenciais"><Botao cor="green" texto="Acessar o App"/></Link>
          <br></br>
          <Link href="/integrantes"><Botao cor="green" texto="Acessar a página Integrantes"/></Link>
          <br></br>
          <Link href="/cadastrar">Ainda não tem uma conta? Registre-se.</Link>
          
        </Footer>
      </>
    )
  }