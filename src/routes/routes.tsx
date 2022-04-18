import Session from "../pages/sign-in";
import Profile from '../pages/profile';
import Main from '../pages/main';

interface IRoute {
    path: string,
    element: any;
}

export const sessionRoutes: IRoute[] = [
    {
        path: '/profile',
        element: <Profile />
    }
];

export const noSessionRoutes: IRoute[] = [
    {
        path: '/signin',
        element: <Session />
    },

];

export const publicRoutes: IRoute[] = [
    {
        path: '/',
        element: <Main />
    }
]

