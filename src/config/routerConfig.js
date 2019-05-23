import AdminPhysicalPage from '../pages/admin/physical';
import PersonPage from '../pages/person';
import LoginPage from '../pages/Login';
import AdminLayoutPage from '../layout/admin';
const routerData = {
    admin: [
        {
            path: '/admin/physical',
            component: AdminPhysicalPage,
            show: true,
            name: '体检管理',
            routes: []
        },
        {
            path: '/admin/persion',
            show: true,
            component: PersonPage,
            name: '用药管理',
            routes: []
        }
    ]
};

const MainRouterConfig = [
    {
        path: '/admin',
        name: '超级管理员',
        role: ['admin'],
        component: AdminLayoutPage
    },
    {
        path: '/login',
        name: '登录',
        role: ['admin'],
        component: LoginPage
    }
];


export {
    routerData,
    MainRouterConfig
};