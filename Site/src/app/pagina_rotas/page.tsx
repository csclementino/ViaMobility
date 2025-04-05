// app/tela_principal/page.tsx
'use client'

import React from 'react';
import Header_Principal from '@/components/header_principal/page';
import Navegacao from '@/components/barra_navegacao/page';
import '@/app/globals.css';
import MainContent from '@/components/conteudo_rotas/page';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="main-page">
        <Header_Principal />
        <div className="content">      
        <MainContent />
        </div>
      </div>

      <Navegacao />
    </div>
  );
};

export default MainPage;