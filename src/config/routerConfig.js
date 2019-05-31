import LoginPage from '../pages/Login';
import RegisterPage from '../pages/register';

//社区用户

import UserLayoutPage from '../layout/user';

import UserPersonPage from '../pages/user/person';
import UserPersonInfo from '../pages/user/person/info';
import UserPersonPay from '../pages/user/person/pay';
import UserPersonChangePwd from '../pages/user/person/cpwd';


import UserMedicinePage from '../pages/user/medicine';
import UserMedicineHistory from '../pages/user/medicine/history';
import UserMedicineMorder from '../pages/user/medicine/morder';

import UserGuestPage from '../pages/user/guest';
import UserGuestHistory from '../pages/user/guest/history';
import UserGuestMorder from '../pages/user/guest/morder';
import UserGuestChat from '../pages/user/guest/chats';

import UserMsgPage from '../pages/user/msg';
import UserMsgPay from '../pages/user/msg/pay';
import UserMsgLogin from '../pages/user/msg/login';
import UserMsgMedicine from '../pages/user/msg/medicine';
import UserMsgGuest from '../pages/user/msg/guest';


import UserHealthPage from '../pages/user/health';
import UserHealthInfo from '../pages/user/health/info';




//社区管理员

import OAdminLayoutPage from '../layout/oadmin';

import OAdminUserPage from '../pages/oadmin/users';
import OAdminUserDetail from '../pages/oadmin/users/detail';
import OAdminUserEdit from '../pages/oadmin/users/edit';
import OAdminUserAdd from '../pages/oadmin/users/add';

import OAdminHealthPage from '../pages/oadmin/health';
import OAdminHealthDetail from '../pages/oadmin/health/detail';
import OAdminHealthEdit from '../pages/oadmin/health/edit';
import OAdminHealthAdd from '../pages/oadmin/health/add';

import OAdminPersonPage from '../pages/oadmin/person';
import OAdminPersonEdit from '../pages/oadmin/person/edit';

//医生

import DoctorLayoutPage from '../layout/doctor';

import DoctorGuestPage from '../pages/doctor/guest';
import DoctorGuestDetail from '../pages/doctor/guest/detail';
import DoctorGuestEdit from '../pages/doctor/guest/edit';
import DoctorGuestAdd from '../pages/doctor/guest/add';

import DoctorMedicinePage from '../pages/doctor/medicine';
import DoctorMedicineDetail from '../pages/doctor/medicine/detail';
import DoctorMedicineEdit from '../pages/doctor/medicine/edit';
import DoctorMedicineAdd from '../pages/doctor/medicine/add';


import DoctorPersonPage from '../pages/doctor/person';
import DoctorPersonEdit from '../pages/doctor/person/edit';


//超级管理员

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

import AdminHealthPage from '../pages/admin/health';
import AdminHealthDetail from '../pages/admin/health/detail';
import AdminHealthEdit from '../pages/admin/health/edit';
import AdminHealthAdd from '../pages/admin/health/add';

import AdminMedicinePage from '../pages/admin/medicine';
import AdminMedicineDetail from '../pages/admin/medicine/detail';
import AdminMedicineEdit from '../pages/admin/medicine/edit';
import AdminMedicineAdd from '../pages/admin/medicine/add';

import AdminPersonPage from '../pages/admin/person';
import AdminPersonEdit from '../pages/admin/person/edit';



const routerData = {
    admin: [
        {
            path: '/admin/physical',
            component: AdminPhysicalPage,
            icon:'icon-shouye',
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
            path: '/admin/medicine',
            component: AdminMedicinePage,
            icon:'icon-yaopin',
            show: true,
            name: '用药管理',
            exact: true,
            routes: [
                {
                    path: '/admin/medicine/detail/:id',
                    show: true,
                    component: AdminMedicineDetail,
                    exact: false,
                },
                {
                    path: '/admin/medicine/edit/:id',
                    show: true,
                    component: AdminMedicineEdit,
                    exact: false,
                },
                {
                    path: '/admin/medicine/add',
                    show: true,
                    component: AdminMedicineAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/admin/guest',
            component: AdminGuestPage,
            icon:'icon-yuedu',
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
            path: '/admin/health',
            component: AdminHealthPage,
            icon:'icon-yiyuan',
            show: true,
            name: '健康指南',
            exact: true,
            routes: [
                {
                    path: '/admin/health/detail/:id',
                    show: true,
                    component: AdminHealthDetail,
                    exact: false,
                },
                {
                    path: '/admin/health/edit/:id',
                    show: true,
                    component: AdminHealthEdit,
                    exact: false,
                },
                {
                    path: '/admin/health/add',
                    show: true,
                    component: AdminHealthAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/admin/user',
            component: AdminUserPage,
            icon:'icon-xiaoxi',
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
            icon:'icon-wode',
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
    ],
    oadmin: [
        {
            path: '/oadmin/health',
            component: OAdminHealthPage,
            icon:'icon-yiyuan',
            show: true,
            name: '健康指南',
            exact: true,
            routes: [
                {
                    path: '/oadmin/health/detail/:id',
                    show: true,
                    component: OAdminHealthDetail,
                    exact: false,
                },
                {
                    path: '/oadmin/health/edit/:id',
                    show: true,
                    component: OAdminHealthEdit,
                    exact: false,
                },
                {
                    path: '/oadmin/health/add',
                    show: true,
                    component: OAdminHealthAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/oadmin/user',
            component: OAdminUserPage,
            icon:'icon-xiaoxi',
            show: true,
            name: '用户管理',
            exact: true,
            routes: [
                {
                    path: '/oadmin/user/detail/:id',
                    show: true,
                    component: OAdminUserDetail,
                    exact: false,
                },
                {
                    path: '/oadmin/user/edit/:id',
                    show: true,
                    component: OAdminUserEdit,
                    exact: false,
                },
                {
                    path: '/oadmin/user/add',
                    show: true,
                    component: OAdminUserAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/oadmin/persion',
            show: true,
            component: OAdminPersonPage,
            icon:'icon-wode',
            exact: true,
            name: '个人中心',
            routes: [
                {
                    path: '/oadmin/persion/edit',
                    show: true,
                    component: OAdminPersonEdit,
                    exact: false,
                }
            ]
        },
    ],
    doctor: [
        {
            path: '/doctor/guest',
            component: DoctorGuestPage,
            icon:'icon-zhishi',
            show: true,
            name: '随访管理',
            exact: true,
            routes: [
                {
                    path: '/doctor/guest/detail/:id',
                    show: true,
                    component: DoctorGuestDetail,
                    exact: false,
                },
                {
                    path: '/doctor/guest/edit/:id',
                    show: true,
                    component: DoctorGuestEdit,
                    exact: false,
                },
                {
                    path: '/doctor/guest/add',
                    show: true,
                    component: DoctorGuestAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/doctor/medicine',
            component: DoctorMedicinePage,
            icon:'icon-yaopin',
            show: true,
            name: '用药管理',
            exact: true,
            routes: [
                {
                    path: '/doctor/medicine/detail/:id',
                    show: true,
                    component: DoctorMedicineDetail,
                    exact: false,
                },
                {
                    path: '/doctor/medicine/edit/:id',
                    show: true,
                    component: DoctorMedicineEdit,
                    exact: false,
                },
                {
                    path: '/doctor/medicine/add',
                    show: true,
                    component: DoctorMedicineAdd,
                    exact: false,
                },
            ]
        },
        {
            path: '/doctor/persion',
            show: true,
            icon:'icon-wode',
            component: DoctorPersonPage,
            exact: true,
            name: '个人中心',
            routes: [
                {
                    path: '/doctor/persion/edit',
                    show: true,
                    component: DoctorPersonEdit,
                    exact: false,
                }
            ]
        },
    ],
    user: [
        {
            path: '/user/persion',
            show: true,
            component: UserPersonPage,
            icon:'icon-wode',
            exact: true,
            name: '个人中心',
            routes: [
                {
                    path: '/user/persion/info',
                    show: true,
                    component: UserPersonInfo,
                    exact: false,
                },
                {
                    path: '/user/persion/cpwd',
                    show: true,
                    component: UserPersonChangePwd,
                    exact: false,
                },
                {
                    path: '/user/persion/pay',
                    show: true,
                    component: UserPersonPay,
                    exact: false,
                },
            ]
        },
        {
            path: '/user/medicine',
            show: true,
            component: UserMedicinePage,
            icon:'icon-yaopin',
            exact: true,
            name: '用药管理',
            routes: [
                {
                    path: '/user/medicine/history',
                    show: true,
                    component: UserMedicineHistory,
                    exact: false,
                },
                {
                    path: '/user/medicine/morder',
                    show: true,
                    component: UserMedicineMorder,
                    exact: false,
                }
            ]
        },
        {
            path: '/user/guest',
            show: true,
            component: UserGuestPage,
            icon:'icon-zhishi',
            exact: true,
            name: '随访记录',
            routes: [
                {
                    path: '/user/guest/history',
                    show: true,
                    component: UserGuestHistory,
                    exact: false,
                },
                {
                    path: '/user/guest/morder',
                    show: true,
                    component: UserGuestMorder,
                    exact: false,
                },
                {
                    path: '/user/guest/chat',
                    show: true,
                    component: UserGuestChat,
                    exact: false,
                }
            ]
        },
        {
            path: '/user/health',
            show: true,
            component: UserHealthPage,
            icon:'icon-yiyuan',
            exact: true,
            name: '健康指南',
            routes: [
                {
                    path: '/user/health/info/:id',
                    show: true,
                    component: UserHealthInfo,
                    exact: false,
                }
            ]
        },
        {
            path: '/user/msg',
            show: true,
            component: UserMsgPage,
            icon:'icon-xiaoxi',
            exact: true,
            name: '消息记录',
            routes: [
                {
                    path: '/user/msg/pay',
                    show: true,
                    component: UserMsgPay,
                    exact: false,
                },
                {
                    path: '/user/msg/guest',
                    show: true,
                    component: UserMsgGuest,
                    exact: false,
                },
                {
                    path: '/user/msg/login',
                    show: true,
                    component: UserMsgLogin,
                    exact: false,
                },
                {
                    path: '/user/msg/medicine',
                    show: true,
                    component: UserMsgMedicine,
                    exact: false,
                },
            ]
        },

    ]
};

const MainRouterConfig = [
    {
        path: '/admin',
        name: '超级管理员',
        component: AdminLayoutPage
    },
    {
        path: '/oadmin',
        name: '社区管理员',
        component: OAdminLayoutPage
    },
    {
        path: '/doctor',
        name: '医生',
        component: DoctorLayoutPage
    },
    {
        path: '/user',
        name: '社区用户',
        component: UserLayoutPage
    },
    {
        path: '/login',
        name: '登录',
        component: LoginPage
    },
    {
        path: '/register',
        name: '注册',
        component: RegisterPage
    },
];


export {
    routerData,
    MainRouterConfig
};