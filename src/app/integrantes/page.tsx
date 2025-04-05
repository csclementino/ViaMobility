// app/tela_integrantes/page.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';
import '@/app/globals.css';

const IntegrantesPage = () => {
  return (
    <main className="integrantes-screen">
      <div className="integrantes-container">
        <h1 className="main-title">ViaMobility</h1>
        
        <div className="members-section">
          <div className="member-card">
            <div className="member-header">
              <h2 className="member-name">Arthur Algate</h2>
              <span className="member-info">RM 560109 | Turma 11DSQ</span>
            </div>
            <p className="member-description">
              Meu nome é Arthur Ribeiro Algate, tenho 18 anos e já morei nos Estados Unidos. 
              Sou músico, apaixonado por tecnologia e atualmente estudo Análise e Desenvolvimento de Sistemas.
            </p>
            <div className="divider-line" />
          </div>

          <div className="member-card">
            <div className="member-header">
              <h2 className="member-name">Rafael Nonato</h2>
              <span className="member-info">RM 560634 | Turma 11DSQ</span>
            </div>
            <p className="member-description">
              Sou Rafael, tenho 29 anos e tenho grande paixão por inovação, tecnologia e programação. 
              Minhas maiores afinidades são com web design e programação Back-End. Além disso, sou também professor de inglês.
            </p>
            <div className="divider-line" />
          </div>

          <div className="member-card">
            <div className="member-header">
              <h2 className="member-name">Carlos Santiago</h2>
              <span className="member-info">RM 561187 | Turma 11DSQ</span>
            </div>
            <p className="member-description">
              Sou formado em Técnico de Eletrônica, membro ativo do CFT e, atualmente, estou focado na área de 
              Tecnologia da Informação. Com sólida base técnica e experiência em projetos.
            </p>
          </div>
        </div>

        <Link href='/'><Botao texto='Retornar'/></Link>
        

        <footer className="members-footer">
          <p>© Todos os direitos reservados - Grupo ARC</p>
        </footer>
      </div>
    </main>
  );
};

export default IntegrantesPage;