import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import React, { FunctionComponent, ReactNode } from 'react'; // importing FunctionComponent

type TitleProps = {
    className?: string
    children: ReactNode,
}

export const Title: FunctionComponent<TitleProps> = ({ children,className }) => <h2
     className ={`text-white my-10 uppercase text-center stroke font-extrabold ${className}`}>
    {children}
</h2>




export const Button: React.FC<TitleProps> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-6 font-medium text-white bg-blue-500 rounded hover:bg-blue-200 transition duration-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
