import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home_Page from './pages/home_page';
import DD from './pages/detail_description';
import NotFound from './pages/NotFound';
import Cart from './pages/cart';


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home_Page/>,
        errorElement:<NotFound/>        
    },
    {
        path:"/productdesc/:id",
        element:<DD/>
    },
    {
        path:"/cart",
        element:<Cart/>
    }
]);

export default function App(){
        return(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
        );
}