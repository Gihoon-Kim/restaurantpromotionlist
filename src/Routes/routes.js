import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Pages/Layouts/RootLayout";
import { HomeRoutes } from "./HomeRoutes";
import { AboutMeRoutes, AboutUsRoutes } from "./AboutRoutes";
import { PromotionListRoutes } from "./PromotionListRoutes";
import { LoginRoutes } from "./LoginRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      HomeRoutes,
      AboutMeRoutes,
      AboutUsRoutes,
      PromotionListRoutes,
      LoginRoutes,
    ],
  },
]);
