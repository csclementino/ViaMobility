// app/tela_atualizar_tel/page.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';

const UpdatePhoneScreen = () => {
  return (
    <main className="phone-update-screen">
      <h1 className="phone-update-title">Atualizar número de telefone</h1>
      
      <div className="phone-update-content">
        <div className="current-phone-section">
          <p className="current-phone-text">Seu número de telefone atual é +55******039</p>
          <p className="disclaimer-text">
            Mudar de número de telefone não afetará as informações do trajeto ou quaisquer outras informações da sua conta
          </p>
        </div>

        <div className="divider-line" />

        <Link href="/pagina_perfil"><Botao texto="Atualizar agora"></Botao></Link>

      </div>
      <Link href="/pagina_perfil"><Botao texto="Cancelar"></Botao></Link>
    </main>
  );
};

export default UpdatePhoneScreen;