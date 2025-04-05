import React from 'react';

interface ConfirmarSenhaInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConfirmarSenhaInput: React.FC<ConfirmarSenhaInputProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="confirmar-senha" className="block text-sm font-medium">
        Confirmar Senha
      </label>
      <input
        type="password"
        id="confirmar-senha"
        name="confirmar-senha"
        value={value}
        onChange={onChange}
        className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default ConfirmarSenhaInput;