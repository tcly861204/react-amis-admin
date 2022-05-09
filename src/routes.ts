import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));
const Editer = lazy(() => import('@/pages/Editor'));
const Login = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/components/NotFound'));
const App = lazy(() => import('@/pages/App'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/editor',
        exact: true,
        component: Editer,
      },
      {
        path: '/app/*',
        exact: true,
        component: App,
      },
      {
        path: '/login',
        component: Login,
        // wrappers: [WrapperPage, LoginWrapper],
        // wrappers: [WrapperPage],
        pageConfig: {
          title: '登录页面',
        },
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
