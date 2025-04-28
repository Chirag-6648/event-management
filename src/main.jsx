import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Events from "./pages/Events.jsx";
import Event from "./components/Events/Events.jsx";
import EventDetails from "./components/Events/Event.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Register from "./pages/Register.jsx";
import UserAccount from "./pages/UserAccount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/eventCategory",
        element: <Events />,
      },
      {
        path: "/events",
        element: <Event />,
      },
      {
        path: "/eventDetails",
        element: <EventDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/account",
        element: <UserAccount />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Fragment>
    <RouterProvider router={router} />
  </Fragment>
);
