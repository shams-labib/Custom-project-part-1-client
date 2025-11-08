import { createBrowserRouter } from "react-router";
import RootLayout from "../Main Layout/RootLayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Components/Home/Home";
import Login from "../Firebase/Login/Login";
import Register from "../Firebase/Register/Register";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Bids from "../Pages/Bids/Bids";
import CreateProducts from "../Pages/CreateProducts/CreateProducts";
import Products from "../Components/products/Products";

export const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-products",
        element: <Products></Products>,
      },
      {
        path: "/bids",
        element: <Bids></Bids>,
      },
      {
        path: "/create-product",
        element: <CreateProducts></CreateProducts>,
      },
    ],
  },
]);
