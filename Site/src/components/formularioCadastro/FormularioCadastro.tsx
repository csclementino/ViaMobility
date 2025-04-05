'use client';

import React, { useState } from 'react';
import EmailInput from '@/components/formulario/EmailInput';
import SenhaInput from '@/components/formulario/SenhaInput';
import NomeInput from '@/components/formularioCadastro/NomeInput'; // você precisará criar esse componente
import ConfirmarSenhaInput from '@/components/formularioCadastro/ConfirmarSenhaInput'; // você precisará criar esse componente
import Botao from '../botaoGradienteVerdeAzul/page';
import Link from 'next/link';
import "@/components/formulario/formulario.css"
import TituloAzul from '../TituloAzul/page';

const FormularioCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(nome, email, senha, confirmarSenha);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <TituloAzul texto="Cadastrar-se"></TituloAzul>
      <NomeInput value={nome} onChange={(event) => setNome(event.target.value)} />
      <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
      <SenhaInput value={senha} onChange={(event) => setSenha(event.target.value)} />
      <ConfirmarSenhaInput value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} />
      <Link href="/"><Botao texto="Criar Conta">
      </Botao></Link>
    </form>
  );
};

export default FormularioCadastro;