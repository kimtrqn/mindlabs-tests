import Session from "../pages/sign-in";
import Profile from '../pages/profile';

interface IRoute {
    path: string,
    element: any;
}

const routes: IRoute[] = [
    {
        path: '/signin',
        element: <Session />
    },
    {
        path: '/profile',
        element: <Profile />
    }
]

export default routes;