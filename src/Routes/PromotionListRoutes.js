import PromotionLayout from "../Pages/PromotionList/PromotionLayout";
import PromotionListPage, {
  loader as restaurantsLoader,
} from "../Pages/PromotionList/PromotionListPage";

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
