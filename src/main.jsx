import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import "./App.css";
// import App from "./App.jsx";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />
// );
