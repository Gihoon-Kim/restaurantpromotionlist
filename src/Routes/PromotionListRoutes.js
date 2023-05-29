import PromotionLayout from "../Layout/PromotionLayout";
import PromotionListPage from "../Pages/PromotionListPage";

export const PromotionListRoutes = {
  path: "promotion-list",
  element: <PromotionLayout />,
  children: [
    {
      index: true,
      element: <PromotionListPage />,
    },
  ],
};
