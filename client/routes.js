import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Logout from './components/auth/Logout';
import Pagenotfound from './components/shared/Pagenotfound';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        auth:false
    },
    {
        path: '/about',
        component: About,
        exact: true,
        auth:true
    },
    {
        path: '/signup',
        component: Signup,
        exact: true,
        auth:false
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        auth:false
    },
    {
        path: '/logout',
        component: Logout,
        exact: true,
        auth:true
    },
    {
        component: Pagenotfound,
        auth:false
    }
]

export default routes;