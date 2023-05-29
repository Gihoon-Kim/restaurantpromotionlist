import PromotionLayout from "../Layout/PromotionLayout";
import PromotionListPage, {
  loader as restaurantsLoader,
} from "../Pages/PromotionListPage";

export const PromotionListRoutes = {
  path: "promotion-list",
  element: <PromotionLayout />,
  children: [
    {
      index: true,
      element: <PromotionListPage />,
      loader: restaurantsLoader,
    },
  ],
};
