import React from 'react'

interface InputComponentProps {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    isWhite?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({name, type, placeholder, value, onChange, isWhite}) => {
  const capitalizeFirstLetterLabel = (str:string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className='mt-4'>
        <label 
            htmlFor={name} 
            className={`block font-bold ${isWhite ? 'text-white' : 'text-greyPrimary'}`}
        >
            {capitalizeFirstLetterLabel(name)}
        </label>
        <input type={type} placeholder={placeholder} id={name} value={value} onChange={onChange} 
            className={`mt-2 py-4 px-6 border-2 rounded-full w-full font-normal ${isWhite ? 'border-white text-white bg-transparent' : 'border-greySecondary text-greySecondary'}`}
            required
        />
    </div>
  )
}

export default InputComponent