'use client'

import Link from "next/link";
import TituloAzul from "@/components/TituloAzul/page";
import CodigoVerificacao from "@/components/codigoVerificacao/page";
import { useState } from 'react';
import '@/app/globals.css';
import Botao from "@/components/botaoGradienteVerdeAzul/page";

const App = () => {
  const [codigo, setCodigo] = useState('');

  const handleChange = (valor: string) => {
    setCodigo(valor);
  };

  return (
    <div>
      <CodigoVerificacao valor={codigo} onChange={handleChange} />
    </div>
  );
};

export default function Login() {
    return (
      <>
        <div className='paginaVerificacao'>     
          <TituloAzul texto="Verificação por E-mail"></TituloAzul>
          <h2>Verifique o código recebido por e-mail e digite abaixo:</h2>
          <App />
          <Link href="/criar_nova_senha"><Botao texto="Enviar"></Botao></Link>
        </div>
      </>
    )
  }