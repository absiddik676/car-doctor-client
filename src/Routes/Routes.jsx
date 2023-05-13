import { createBrowserRouter } from "react-router-dom";
import Mani from "../Layout/Mani";
import Home from "../page/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mani/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);

  export default router