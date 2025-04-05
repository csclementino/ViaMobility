import React from "react";
import "./header.css"

interface HeaderProps {
    texto?: string;
    children?: React.ReactNode;
  }
  
  const Header: React.FC<HeaderProps> = ({ texto, children }) => {
    return (
      <header className="header">
        {texto}
        {children}
      </header>
    );
  };
  
  export default Header;