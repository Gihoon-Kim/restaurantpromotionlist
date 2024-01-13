import CredentialLayout from "../Pages/Credentials/CredentialLayout";
import LoginPage from "../Pages/Credentials/LoginPage";
import RegisterPage from "../Pages/Credentials/RegisterPage";

export const LoginRoutes = {
  path: "login",
  element: <CredentialLayout />,
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
    {
      path: "signup",
      element: <RegisterPage />,
    },
  ],
};
