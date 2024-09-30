import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Causes from "../pages/Causes";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Blogs from "../pages/Blogs";
import Team from "../pages/Team";
import Volunteer from "../pages/Volunteer";
import Projects from "../pages/Projects";
import About from "../pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/causes",
        element: <Causes />,
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
        path: "/events",
        element: <Events />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/team",
        element: <Team />,
      },

      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default routes;
