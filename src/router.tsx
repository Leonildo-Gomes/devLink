import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout';
import { Admin } from './pages/admin';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Networks } from './pages/networks';
 const router = createBrowserRouter([
        {   
            element:<Layout/>,
            children: [
                { path: '/', element: <Home/>},
                { path: '/login', element: <Login/>},
                { path: '/admin', element: <Admin/>},
                { path: '/admin/social', element: <Networks/>},
            ],
        },
       
]);

 export { router };
