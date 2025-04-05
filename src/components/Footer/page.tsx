import React from "react";
import "./footer.css"

interface FooterProps {
    texto?: string;
    children?: React.ReactNode;
  }
  
  const Footer: React.FC<FooterProps> = ({ texto, children }) => {
    return (
      <footer className="footer">
        {texto}
        {children}
      </footer>
    );
  };
  
  export default Footer;