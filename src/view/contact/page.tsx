import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function ContactPage() {
    return (
        <Button asChild variant='link'>
            <Link to='/'>Go back home</Link>
        </Button>
    );
}

export default ContactPage;
