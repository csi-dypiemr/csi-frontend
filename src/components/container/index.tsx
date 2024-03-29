import { Props } from "react";



export const Container: React.FC<any> = ({ children, ...props }) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};
// Container: React.FC<Props> = ({ children, ...props }) => {