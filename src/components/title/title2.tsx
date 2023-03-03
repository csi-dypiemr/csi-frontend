import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import React, { FunctionComponent, ReactNode } from 'react'; // importing FunctionComponent

type TitleProps = {
    className?: string
    children: ReactNode,
}

// export const Title2: FunctionComponent<TitleProps> = ({ children,className }) => <h2
//      className ={`text-gray my-10 uppercase text-center text-5xl stroke2 font-extrabold`}>
//     {children}
// </h2>

export const Title2: FunctionComponent<TitleProps> = ({ children, className }) => (
  <div className="flex h-screen">
    <div className="m-auto">
      <h2
        className={`text-gray my-10 uppercase text-center stroke2 font-extrabold text-8xl`}
      >
        {children}
      </h2>
    </div>
  </div>
);

