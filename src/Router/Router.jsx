import { createBrowserRouter } from "react-router";
import RootLayout from "../Main Layout/RootLayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Components/Home/Home";

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
    ],
  },
]);
