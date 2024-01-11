import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Success from "../pages/Success";
import Login from "../pages/Login";
import Register from "../pages/Register";
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
