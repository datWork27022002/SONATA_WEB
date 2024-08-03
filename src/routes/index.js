import config from '~/config';
import { BreadcrumbLayout } from '~/layouts';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import BasicSettings from '~/pages/BasicSettings';

const { routes } = config;

export const publicRoute = [
    { path: routes.HOME, component: Home },
    { path: routes.LOGIN, component: Login, layout: null },
    { path: routes.BasicSettings.BASICSETTINGS, component: BasicSettings, layout: BreadcrumbLayout },
];
export const privateRoute = [];
