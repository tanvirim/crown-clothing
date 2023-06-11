import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home-page/home-page.component";
import Shop from "./components/shop/shop.component";
import Signin from "./components/sign-in/signin.component";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          index: true,
          path: "/shop",
          element: <Shop />,
        },
        {
          index: true,
          path: "/signin",
          element: <Signin />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
