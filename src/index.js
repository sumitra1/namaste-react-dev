import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact
 from "./components/Contact";
 import RestaurantMenu from "./components/RestaurantMenu";
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ],
  },
]);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

root.render(<RouterProvider router={appRouter} />);
