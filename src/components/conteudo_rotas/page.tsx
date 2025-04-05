// components/conteudo_rotas/page.tsx
import React from 'react';
import './conteudo_rotas.css';

interface FavoriteItem {
  station: string;
  line: string;
  address: string;
}

interface RecentItem {
  station: string;
  line: string;
  address: string;
  checked: boolean;
}

const MainContent: React.FC = () => {
  const favorites: FavoriteItem[] = [
    {
      station: "Estação - Penha",
      line: "Linha 3 vermelha",
      address: "R. Alvinópolis, 178 - Vila Beatriz, São Paulo"
    }
  ];

  const recents: RecentItem[] = [
    {
      station: "Estação - Vila Matilde",
      line: "Linha 3 vermelha",
      address: "R. Joaquim Marra, 418",
      checked: true
    },
    {
      station: "Estação - Tatuapé",
      line: "Linha 3 vermelha",
      address: "R. Melo Freire - Tatuapé, São Paulo - SP",
      checked: true
    }
  ];

  return (
    <div className="main-content">
      <div className="section-box">
        <h2 className="section-title">Favoritos</h2>
        {favorites.map((item, index) => (
          <div key={index} className="route-item">
            <div className="icon-container">
              <img src="/localizacao.png" alt="Localização" className="location-icon" />
            </div>
            <div className="route-info">
              <div className="header-line">
                <h3 className="station-name">{item.station}</h3>
                <span className="line-number">{item.line}</span>
              </div>
              <p className="address">{item.address}</p>
            </div>
            <div className="icon-container">
              <img src="/estrela.png" alt="Favorito" className="favorite-icon" />
            </div>
            {index < favorites.length - 1 && <div className="route-divider" />}
          </div>
        ))}
      </div>

      <div className="section-box recent-box">
        <h2 className="section-title">Recentes</h2>
        {recents.map((item, index) => (
          <div key={index} className="route-item">
            <div className="icon-container">
              <img src="/localizacao.png" alt="Localização" className="location-icon" />
            </div>
            <div className="route-info">
              <div className="header-line">
                <h3 className="station-name">{item.station}</h3>
                <span className="line-number">{item.line}</span>
              </div>
              <p className="address">{item.address}</p>
            </div>
            <div className="icon-container">
              <img src="/estrela.png" alt="Favorito" className="favorite-icon" />
            </div>
            {index < recents.length - 1 && <div className="route-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;