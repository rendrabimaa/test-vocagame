import React, { ReactNode } from 'react'

interface ButtonSubmitProps {
    value: string;
    isWhiteBackground?: boolean;
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({value, isWhiteBackground}) => {
  return (
    <input type="submit" value={value} className={`w-full py-4 px-6 rounded-full font-bold ${isWhiteBackground ? 'text-black bg-greyThird' : 'bg-blueThird dark:bg-orangePrimary dark:bg-opacity-20 text-blueSecondary dark:text-orangePrimary'}`} />
  )
}

export default ButtonSubmit