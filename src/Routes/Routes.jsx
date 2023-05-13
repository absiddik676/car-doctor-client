import { createBrowserRouter } from "react-router-dom";
import Mani from "../Layout/Mani";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mani/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'signup',
            element:<SignUp/>
        },
      ]
    },
  ]);

  export default router