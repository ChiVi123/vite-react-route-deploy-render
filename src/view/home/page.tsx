import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography-h1';
import { TypographyInlineCode } from '@/components/ui/typography-inline-code';
import { TypographyP } from '@/components/ui/typography-p';
import { Link } from 'react-router-dom';

function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <>
            <TypographyH1>Vite + React</TypographyH1>
            <div className='card'>
                <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                <TypographyP>
                    Edit <TypographyInlineCode>src/App.tsx</TypographyInlineCode> and save to test HMR
                </TypographyP>
            </div>
            <TypographyP>Click on the Vite and React logos to learn more</TypographyP>
            <Button asChild variant='link'>
                <Link to='/contact'>Contact</Link>
            </Button>
        </>
    );
}

export default HomePage;
