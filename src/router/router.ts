

import Home from '../pages/home';
import { routerItemType } from '../typings';
// import Login from '../pages/login';
// import Register from '../pages/register';
// import routerItemType from ''

const routeConfig: routerItemType[] = [
    {
        name: '首页',
        path: '/',
        component: Home,
        children: [],
    },
]

export default routeConfig