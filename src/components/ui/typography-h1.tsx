import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export function TypographyH1({ children }: IProps) {
    return <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>{children}</h1>;
}
