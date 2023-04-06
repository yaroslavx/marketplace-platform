import React from "react";
import { Navbar } from "src/components/Navbar";
import "src/app.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HomePage } from "src/pages/HomePage";
import { Footer } from "src/components/Footer";
import { GigsPage } from "src/pages/GigsPage";
import { GigPage } from "src/pages/GigPage";
import { OrdersPage } from "src/pages/OrdersPage";
import { MyGigsPage } from "src/pages/MyGigsPage";
import { AddPage } from "src/pages/AddPage";
import { MessagesPage } from "src/pages/MessagesPage";
import { MessagePage } from "src/pages/MessagePage";

export const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <span id="anchor"></span>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/gigs",
          element: <GigsPage />,
        },
        {
          path: "/gigs/:id",
          element: <GigPage />,
        },
        {
          path: "/orders",
          element: <OrdersPage />,
        },
        {
          path: "/mygigs",
          element: <MyGigsPage />,
        },
        {
          path: "/add",
          element: <AddPage />,
        },
        {
          path: "/messages",
          element: <MessagesPage />,
        },
        {
          path: "/messages/:id",
          element: <MessagePage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
