// app/tela_principal/page.tsx
'use client'

import React from 'react';
import Header_Principal from '@/components/header_principal/page';
import Navegacao from '@/components/barra_navegacao/page';
import '@/app/globals.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="main-page">
        <Header_Principal />
        <div className="content">
          <div className="mapatexto">
            <p>A função "Mapa" irá permitir a visualização do mapa da cidade e irá exibir as linhas com suas respectivas cores e trajetos dentro do mapa da cidade de São Paulo. Essa função será implementada junto às APIs</p>     
          </div>
        </div>
      </div>

      <Navegacao /> 
    </div>
  );
};

export default MainPage;