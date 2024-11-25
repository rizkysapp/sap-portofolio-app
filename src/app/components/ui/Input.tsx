import React from "react";

interface Props {
  className?: string;
  type: string;
  name: string;
  labelName: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
}

const Input: React.FC<Props> = ({ type, name, labelName, placeholder, onChange, value }) => {
  return (
    <div>
      <div>
        <label htmlFor={name} className="block ml-[2px] mb-1 text-base font-medium text-gray-700 capitalize">
          {labelName}
        </label>
        <input
          name={name}
          onChange={onChange}
          type={type}
          id={name}
          value={value}
          className="shadow-sm  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-300 border-gray-900 placeholder-gray-500 text-gray-800 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default Input;
