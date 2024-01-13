import AboutLayout from "../Pages/About/AboutLayout";
import AboutMePage from "../Pages/About/AboutMePage";
import AboutUsPage from "../Pages/About/AboutUsPage";

export const AboutUsRoutes = {
  path: "about-us",
  element: <AboutLayout />,
  children: [
    {
      index: true,
      element: <AboutUsPage />,
    },
  ],
};

export const AboutMeRoutes = {
  path: "about-me",
  element: <AboutLayout />,
  children: [
    {
      index: true,
      element: <AboutMePage />,
    },
  ],
};
