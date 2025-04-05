// app/pesquisa/page.tsx
'use client'

import Link from 'next/link';
import Navegacao from '@/components/barra_navegacao/page';

const SearchPage = () => {
  return (
    <main className="search-screen">
      <div className="construction-container">
        <img 
          src="em-construcao.png" 
          alt="Em construção" 
          className="construction-icon"
        />
        <h1 className="construction-title">
          Funcionalidade em Desenvolvimento
        </h1>
        <p className="construction-text">
          Nossa equipe está trabalhando para implementar o sistema de pesquisa completo
          integrado com nossas APIs. Esta funcionalidade estará disponível em breve!
        </p>
        <Link href="/tela_principal" className="return-button">
          Voltar para a página inicial
        </Link>
      </div>
      <Navegacao />
    </main>
  );
};

export default SearchPage;