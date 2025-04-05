'use client';

import React, { useState } from 'react';
import EmailInput from '@/components/formulario/EmailInput';
import SenhaInput from '@/components/formulario/SenhaInput';
import Botao from '../botaoGradienteVerdeAzul/page';
import Link from 'next/link';
import "./formulario.css"

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, senha);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
      <SenhaInput value={senha} onChange={(event) => setSenha(event.target.value)} />
      <Link href="/tela_principal"><Botao texto="Entrar">
      </Botao></Link>
    </form>
  );
};

export default Formulario;