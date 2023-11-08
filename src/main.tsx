import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { StoreContextProvider } from "./stores/StoreContext";
import Category from "./routes/Category";
import Home from "./routes/Home";
import Search from "./routes/Search";
import MovieDetails from "./routes/MovieDetails";
import HeaderSearch from "./components/Header";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./main.css";

const HeaderLayout = () => (
  <>
    <HeaderSearch />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/details/:id",
        element: <MovieDetails />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app-container">
      <MantineProvider>
        <StoreContextProvider>
          <RouterProvider router={router} />
        </StoreContextProvider>
      </MantineProvider>
    </div>
  </React.StrictMode>
);
