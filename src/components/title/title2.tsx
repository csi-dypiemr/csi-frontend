import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import React, { FunctionComponent, ReactNode } from 'react'; // importing FunctionComponent

type TitleProps = {
    className?: string
    children: ReactNode,
}

export const Title2: FunctionComponent<TitleProps> = ({ children,className }) => <h2
     className ={`text-gray my-10 uppercase text-center text-5xl stroke2 font-extrabold ${className}`}>
    {children}
</h2>


