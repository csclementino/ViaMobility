// components/SearchBar/SearchBar.tsx
import React, { useState } from 'react';
import './SearchBar.css';
import Link from 'next/link';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Para qual estação deseja ir?"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link href="/pagina_pesquisa"><button type="submit" className="search-button">Pesquisar</button></Link>
    </form>
  );
};

export default SearchBar;