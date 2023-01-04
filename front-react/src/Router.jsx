import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/Home'
import Animals from './routes/Animals'
import Default from './layouts/Default'

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Default><Home /></Default>,
        },{
            path: "animals",
            element: <Default><Animals /></Default>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router