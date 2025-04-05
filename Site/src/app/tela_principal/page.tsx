// app/tela_principal/page.tsx
'use client'

import React from 'react';
import Header_Principal from '@/components/header_principal/page';
import StationItem from '@/components/StationItem/page';
import Navegacao from '@/components/barra_navegacao/page';
import MapSection from '@/components/MapSection/page';
import '@/app/globals.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="main-page">
        <Header_Principal />

        <div className="content">
          <MapSection />

          <div className="stations-list">
            <h2>Linhas Próximas</h2>
            <StationItem
              lineNumber="3"
              lineColor="#FF0000"
              stationName="Conselheiro Carrão"
              time="8 minutos"
              onShowRoute={() => console.log('Trajeto 3')}
            />
            <StationItem
              lineNumber="1"
              lineColor="#0000FF"
              stationName="Sé"
              time="4 minutos"
              onShowRoute={() => console.log('Trajeto 1')}
            />
            <StationItem
              lineNumber="4"
              lineColor="#cece00"
              stationName="República"
              time="8 minutos"
              onShowRoute={() => console.log('Trajeto 3')}
            />
          </div>
        </div>
      </div>

      <Navegacao /> 
    </div>
  );
};

export default MainPage;