import Home from './pages/Home'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import React from 'react'
import Login from './pages/Login';
import { MantineProvider } from '@mantine/core';
import Register from './pages/Register';


const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
},
{
    path: "/login",
    element: <Login />,
},
{
    path: "/register",
    element: <Register />,
}
]);

export default function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

