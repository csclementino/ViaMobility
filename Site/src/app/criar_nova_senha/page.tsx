'use client';

import Link from "next/link";
import TituloAzul from "@/components/TituloAzul/page";
import SenhaInput from "@/components/formulario/SenhaInput";
import ConfirmarSenhaInput from "@/components/formularioCadastro/ConfirmarSenhaInput";
import React from "react";
import { useState } from 'react';
import '@/app/globals.css';
import Botao from "@/components/botaoGradienteVerdeAzul/page";

export default function Login() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <>
      <div className='paginaVerificacao'>
        <TituloAzul texto="Criar nova senha"></TituloAzul>
        <h2>Digite uma nova senha para acessar sua conta com segurança: </h2>
        <SenhaInput value={senha} onChange={(e) => setSenha(e.target.value)} />
        <ConfirmarSenhaInput value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
        <Link href="/tela_confirmacao_senha"><Botao texto="Enviar"></Botao></Link>
      </div>
    </>
  )
}