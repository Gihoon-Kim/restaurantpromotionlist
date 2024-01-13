import LoginLayout from "../Pages/Credentials/LoginPage";
import RegisterLayout from "../Pages/Credentials/RegisterPage";

export const LoginRoutes = {
  path: "login",
  children: [
    {
      index: true,
      element: <LoginLayout />,
    },
    {
      path: "signup",
      element: <RegisterLayout />,
    },
  ],
};
