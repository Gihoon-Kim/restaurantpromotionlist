import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import { HomeRoutes } from "./HomeRoutes";
import { AboutMeRoutes, AboutUsRoutes } from "./AboutRoutes";
import { PromotionListRoutes } from "./PromotionListRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [HomeRoutes, AboutMeRoutes, AboutUsRoutes, PromotionListRoutes],
  },
]);
