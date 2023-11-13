import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../routes/home";
import About from "../../routes/about";
import Contact from "../../routes/contact";

const router = createBrowserRouter([
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
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
