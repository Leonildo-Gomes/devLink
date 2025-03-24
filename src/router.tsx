import { createBrowserRouter } from 'react-router-dom';
import { Admin } from './pages/admin';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Networks } from './pages/networks';
import { Private } from './routes/Private';
 const router = createBrowserRouter([
        {   
            //element:<Layout/>,
            children: [
                { path: '/', element: <Home/>},
                { path: '/login', element: <Login/>},
                { path: '/admin', element: <Private> <Admin/></Private>},
                { path: '/admin/social', element: <Networks/>},
            ],
        },
       
]);

 export { router };
