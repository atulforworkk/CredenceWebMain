import { Navigate, createBrowserRouter } from "react-router-dom";
import PreAuthLayout from "../views/layout/PreAuthLayout";
import Login from "../views/pages/login/Login";
import About from "../views/pages/about/About";
import AboutUsLayout from "../views/layout/AboutUsLayout";
import Contact from "../views/pages/contact/Contact";
<<<<<<< HEAD
=======
import Todo from "../views/pages/todo/Todo";
import MinorTest from "../views/pages/testing/MinorTest";
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
const router = createBrowserRouter([
  {
    path: "/",
    element: <PreAuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
<<<<<<< HEAD
=======
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/testing",
        element: <MinorTest />,
      },
      {
        path: "/register",
        element: <MinorTest />,
      },
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
    ],
  },
  {
    path: "/about",
    element: <AboutUsLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "about/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
