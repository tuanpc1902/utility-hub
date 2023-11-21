import React from 'react';
import config from '~/config';
import { RoutesInterface } from '~/interfaces/CommonInterfaces.ts';
import Upload from '~/app/pages/Upload';

const Profile = React.lazy(() => import('~/app/pages/Profile'));

const publicRoutes: RoutesInterface[] = [
    { path: config.routes.home, component: Profile },
    { path: config.routes.account, component: Profile },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.video, component: Upload },
];

const privateRoutes: RoutesInterface[] = [];

export { publicRoutes, privateRoutes };
