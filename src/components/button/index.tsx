import React from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
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
