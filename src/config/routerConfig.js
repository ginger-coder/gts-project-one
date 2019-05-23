import LoginPage from '../pages/Login';

import AdminLayoutPage from '../layout/admin';


import AdminPhysicalPage from '../pages/admin/physical';
import AdminPhysicalDetail from '../pages/admin/physical/detail';
import AdminPhysicalEdit from '../pages/admin/physical/edit';
import AdminPhysicalAdd from '../pages/admin/physical/add';

import AdminUserPage from '../pages/admin/users';
import AdminUserDetail from '../pages/admin/users/detail';
import AdminUserEdit from '../pages/admin/users/edit';
import AdminUserAdd from '../pages/admin/users/add';

import AdminGuestPage from '../pages/admin/guest';
import AdminGuestDetail from '../pages/admin/guest/detail';
import AdminGuestEdit from '../pages/admin/guest/edit';
import AdminGuestAdd from '../pages/admin/guest/add';

import AdminPersonPage from '../pages/admin/person';
import AdminPersonEdit from '../pages/admin/person/edit';



const routerData = {
    admin: [
        {
            path: '/admin/physical',
            component: AdminPhysicalPage,
            show: true,
            name: '体检管理',
            exact: true,
            routes: [
                {
                    path: '/admin/physical/detail/:id',
                    show: true,
                    component: AdminPhysicalDetail,
                    exact: false,
                },
                {
                    path: '/admin/physical/edit/:id',
                    show: true,
                    component: AdminPhysicalEdit,
                    exact: false,
                },
                {
                    path: '/admin/physical/add',
                    show: true,
                    component: AdminPhysicalAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/admin/guest',
            component: AdminGuestPage,
            show: true,
            name: '随访管理',
            exact: true,
            routes: [
                {
                    path: '/admin/guest/detail/:id',
                    show: true,
                    component: AdminGuestDetail,
                    exact: false,
                },
                {
                    path: '/admin/guest/edit/:id',
                    show: true,
                    component: AdminGuestEdit,
                    exact: false,
                },
                {
                    path: '/admin/guest/add',
                    show: true,
                    component: AdminGuestAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/admin/user',
            component: AdminUserPage,
            show: true,
            name: '用户管理',
            exact: true,
            routes: [
                {
                    path: '/admin/user/detail/:id',
                    show: true,
                    component: AdminUserDetail,
                    exact: false,
                },
                {
                    path: '/admin/user/edit/:id',
                    show: true,
                    component: AdminUserEdit,
                    exact: false,
                },
                {
                    path: '/admin/user/add',
                    show: true,
                    component: AdminUserAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/admin/persion',
            show: true,
            component: AdminPersonPage,
            exact: true,
            name: '个人中心',
            routes: [
                {
                    path: '/admin/persion/edit',
                    show: true,
                    component: AdminPersonEdit,
                    exact: false,
                }
            ]
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