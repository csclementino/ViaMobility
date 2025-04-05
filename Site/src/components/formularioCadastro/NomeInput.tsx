import React from 'react';

interface NomeInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NomeInput: React.FC<NomeInputProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="nome" className="block text-sm font-medium">
        Nome
      </label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={value}
        onChange={onChange}
        className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default NomeInput;