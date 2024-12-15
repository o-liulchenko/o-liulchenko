import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages";
import { MainLayout } from "../../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
]);
