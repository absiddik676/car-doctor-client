import { createBrowserRouter } from "react-router-dom";
import Mani from "../Layout/Mani";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import CheckOut from "../page/checkOut/checkOut";
import Bookings from "../page/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
        {
            path:'checkOut/:id',
            element:<CheckOut/>,
            loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path:'bookings',
            element:<PrivateRoute><Bookings/></PrivateRoute>,
            
        },
      ]
    },
  ]);

  export default router