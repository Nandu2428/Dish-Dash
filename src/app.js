import React, { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import Err from "./components/Err.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./components/UserContext.js";
import AppStore from "./utils/AppStore.js";
import { Provider } from "react-redux";


const Grocery = lazy(() => import("./components/Grocery.js"));


const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    
    const data = {
      name: "Nanduu"
    }
    setUserName(data.name);
  },[])
  

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ userLogin: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<>Loading......</>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Err />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);

