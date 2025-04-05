import React from 'react';

interface SenhaInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SenhaInput: React.FC<SenhaInputProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="senha" className="block text-sm font-medium">
        Senha
      </label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={"123456"}
        onChange={onChange}
        className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default SenhaInput;