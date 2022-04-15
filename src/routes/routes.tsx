import Session from "../pages/session";

interface IRoute {
    path: string,
    element: any;
}

const routes: IRoute[] = [
    {
        path: '/signin',
        element: <Session />
    }
]

export default routes;