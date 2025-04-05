import React from 'react';
import './navegacao.css';

const Navegacao: React.FC = () => {
  return (
    <nav className="nav">
      <a href="/pagina_linhas" className="nav-link">
        <img src="/icone_linhas.png" className="nav-icon" alt="Linhas"/>
        <span className="nav-text">Linhas</span>
      </a>
      <a href="pagina_mapa" className="nav-link">
        <img src="/icone_mapa.png" className="nav-icon" alt="Mapa"/>
        <span className="nav-text">Mapa</span>
      </a>
      <a href="pagina_rotas" className="nav-link">
        <img src="/icone_rota.png" className="nav-icon" alt="Rota"/>
        <span className="nav-text">Rota</span>
      </a>
      <a href="tela_principal" className="nav-link">
        <img src="/icone_menu.png" className="nav-icon" alt="Menu"/>
        <span className="nav-text">Menu</span>
      </a>
      <a href="pagina_perfil" className="nav-link">
        <img src="/icone_usuario.png" className="nav-icon" alt="Perfil"/>
        <span className="nav-text">Perfil</span>
      </a>
    </nav>
  );
};

export default Navegacao;