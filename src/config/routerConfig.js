import AppHomePage from '../pages/home';
import PersonPage from '../pages/person';
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
    }
]

export {
    routerData
};