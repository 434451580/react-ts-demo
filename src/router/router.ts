

import Home from '../pages/home';
import About from '../pages/about'
import { routerItemType } from '../framework/typings';
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
    {
        name: '关于',
        path: '/about',
        component: About,
        children: [],
    }
]

export default routeConfig