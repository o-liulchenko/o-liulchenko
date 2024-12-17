import { createBrowserRouter } from "react-router-dom";
import { MainPage, NotFound } from "../../pages";
import { MainLayout } from "../../layouts";
import { ROUTES } from "./consts";

export const router = createBrowserRouter([
  {
    path: ROUTES.main,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
  {
    path: ROUTES.notFound,
    Component: NotFound
  }
]);
