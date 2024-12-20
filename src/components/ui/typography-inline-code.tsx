interface IProps {
    children: React.ReactNode;
}

export function TypographyInlineCode({ children }: IProps) {
    return (
        <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
            {children}
        </code>
    );
}
