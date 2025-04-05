'use client';

import React, { useState } from 'react';
import './codigoVerificacao.css';
import '@/components/formulario/formulario.css';

interface CodigoVerificacaoProps {
  valor: string;
  onChange: (valor: string) => void;
  erro?: string;
}

const CodigoVerificacao: React.FC<CodigoVerificacaoProps> = ({
  valor,
  onChange,
  erro,
}) => {
  const [codigo, setCodigo] = useState(valor);
  const [erroInterno, setErroInterno] = useState<string | null>(erro ?? null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    if (valor.length > 4) {
      setErroInterno('Código de verificação deve ter 4 dígitos');
    } else {
      setErroInterno(null);
    }
    setCodigo(valor);
    onChange(valor);
  };

  return (
    <div className="campo-verificacao">
      <input
        type="text"
        value={codigo}
        onChange={handleChange}
        maxLength={4}
        className={`input-verificacao ${erroInterno ? 'erro' : ''}`}
      />
      {erroInterno && <span className="erro-mensagem">{erroInterno}</span>}
    </div>
  );
};

export default CodigoVerificacao;