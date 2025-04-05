import React from 'react';

interface EmailInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="email" className="block text-sm font-medium">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={"carlao@gmail.com"}
        onChange={onChange}
        className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default EmailInput;