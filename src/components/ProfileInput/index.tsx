import React from 'react'

interface ProfileInputProps {
    name: string;
    type: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInput: React.FC<ProfileInputProps> = ({name, type, value, onChange}) => {
  const capitalizeFirstLetterLabel = (str:string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className='mt-4'>
        <label 
            htmlFor={name} 
            className={`block font-bold text-greyPrimary`}
        >
            {capitalizeFirstLetterLabel(name)}
        </label>
        <input type={type} id={name} value={value} onChange={onChange} 
            className={`mt-1 py-2 px-6 border-2 rounded-full w-full font-normalborder-greySecondary text-greySecondary`}
            required
        />
    </div>
  )
}

export default ProfileInput