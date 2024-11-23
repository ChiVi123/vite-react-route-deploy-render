import { createBrowserRouter } from 'react-router-dom';

import { DefaultLayout } from '@/layout';
import homeRouter from '@/view/home/router';
import contactRouter from '@/view/contact/router';

const browserRouter = createBrowserRouter([
    {
        Component: DefaultLayout,
        children: [homeRouter, contactRouter],
    },
]);

export default browserRouter;
