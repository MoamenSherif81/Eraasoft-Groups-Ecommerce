import IsNotLoggedIn from "../Components/IsNotLoggedIn";
import IsLoggedIn from "../Components/isLoggedIn";
import MainLayout from "../Layouts/MainLayout";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Shop from "../Pages/Shop";

const userRoutes = {
  path: "",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <IsLoggedIn><Home /></IsLoggedIn>,
    },
    {
      path: "shop",
      element:  <IsLoggedIn><Shop /></IsLoggedIn>,
    },
    {
      path: "cart",
      element:  <IsLoggedIn><Cart /></IsLoggedIn>,
    },
    {
      path: "login",
      element: (
        <IsNotLoggedIn>
          <Login />
        </IsNotLoggedIn>
      ),
    },
    {
      path: "register",
      element: <IsNotLoggedIn><Register /></IsNotLoggedIn>,
    },
  ],
};

export default userRoutes;
