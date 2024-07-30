import config from '~/config';

import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import Login from '~/pages/Login';

const { routes } = config;

export const publicRoute = [
    { path: routes.HOME, component: Home },
    { path: 'Menu', component: Menu },
    { path: routes.LOGIN, component: Login, layout: null },
];
export const privateRoute = [];
