import AppHomePage from '../pages/home';
import PersonPage from '../pages/person';
import LoginPage from '../pages/Login';
const routerData = [{
        path: '/home',
        component: AppHomePage,
        authority: 'admin',
        routes: [{
            path: '/home',
            component: AppHomePage,
        }]
    },
    {
        path: '/person',
        component: PersonPage,
        authority: ['user', 'admin'],
        routes: [{
            path: '/person',
            component: PersonPage,
        }]
    },
    {
        path: '/login',
        component: LoginPage,
        authority: ['user', 'admin'],
    }
]

export {
    routerData
};