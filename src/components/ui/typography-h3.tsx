interface IProps {
    children: React.ReactNode;
}

export function TypographyH3({ children }: IProps) {
    return <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{children}</h3>;
}