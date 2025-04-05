'use client'

import React from 'react'
import Link from "next/link";
import TituloAzul from "@/components/TituloAzul/page";
import EmailInput from "@/components/formulario/EmailInput";
import '@/app/globals.css';
import Botao from '@/components/botaoGradienteVerdeAzul/page';

export default function Login() {
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className='paginaVerificacao'>
      <TituloAzul texto="Esqueceu sua senha?"></TituloAzul>
      <h2>Digite seu e-mail para receber as instruções de redefinição de senha.</h2>
      <EmailInput value={email} onChange={handleEmailChange} />
      <Link href="/verificacao_senha_nova"><Botao texto="Enviar"></Botao></Link>
      </div>
    </>
  )
}