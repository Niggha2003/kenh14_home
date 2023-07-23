// route
import config from '~/config';

import Home from '~/pages/Home';
import Other from '~/pages/Other';

// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.other, component: Other },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
