import config from '~/config';

import Home from '~/pages/Home';
import Login from '~/pages/Login';

const { routes } = config;

export const publicRoute = [
    { path: routes.HOME, component: Home },
    { path: routes.LOGIN, component: Login, layout: null },
];
export const privateRoute = [];
