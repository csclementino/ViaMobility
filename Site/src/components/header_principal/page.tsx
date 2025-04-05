// components/Header/Header.tsx
import React from 'react';
import SearchBar from '@/components/SearchBar/page';
import './header_principal.css';

const Header_Principal = () => {
  const handleSearch = (query: string) => {
    console.log('Buscar:', query);
  };

  return (
    <header className="header">
      <div className="header-banner">
      <img src="/banner_tela_principal.png" className ="header-banner"/>
      </div>
      <div className="header-content">
        <SearchBar onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header_Principal;