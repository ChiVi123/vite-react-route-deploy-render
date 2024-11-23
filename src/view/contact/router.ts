import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const contactRouter: RouteObject = {
    path: '/contact',
    Component: lazy(() => import('./page')),
};

export default contactRouter;
