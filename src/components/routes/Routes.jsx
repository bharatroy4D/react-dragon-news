import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/home/Home";
import About from "../About/About";
import Career from "../Career/Career";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Roots></Roots>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>,
            },
            {
                path:'/career',
                element:<Career></Career>
            }
        ]
    }
])
export default routes;