import AppHomePage from '../pages/home';
import PersonPage from '../pages/person';
import LoginPage from '../pages/Login';
import adminLayoutPage from '../layout/admin';
const routerData = {
    'admin': [
        {
            path: '/home',
            component: AppHomePage,
            show: true,
            name: '体检管理',
            routes: [{
                path: '/home',
                component: AppHomePage,
            }]
        },
        {
            path: '/person',
            show: true,
            component: PersonPage,
            name: '体检管理',
            routes: [{
                path: '/person',
                component: PersonPage,
            }]
        }
    ],
    'login': {
        path: '/login',
        component: LoginPage
    }
};

const MainRouterConfig = [
    {
        path: '/admin',
        name: '超级管理员',
        role: ['admin'],
        component: adminLayoutPage
    },
]


export {
    routerData,
    MainRouterConfig
};