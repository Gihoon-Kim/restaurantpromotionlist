import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";
import PromotionLayout from "./Layout/PromotionLayout";
import PromotionListPage from "./Pages/PromotionListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "promotion-list",
          element: <PromotionLayout />,
          children: [
            {
              index: true,
              element: <PromotionListPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
