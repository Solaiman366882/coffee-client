import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";
import NewCoffee from "../Pages/NewCoffee/NewCoffee";

export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:() => fetch('http://localhost:5000/coffee')
        },
        {
          path:'/coffee/details',
          element:<CoffeeDetails></CoffeeDetails>
        },
        {
          path:'/newCoffee',
          element:<NewCoffee></NewCoffee>
        }
      ]
    },
  ]);
