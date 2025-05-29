import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";

import ContactsPage from "../components/pages/ContactsPage";
import NewUserPage from "../components/pages/NewUserPage";
import LoginPage from "../components/pages/LoginPage";
import Layout from "../components/pages/Layout";
import ErrorPage from "../components/pages/ErrorPage";
import UserDetails from "../components/UserDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {path: "", element: <HomePage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "user", element: <NewUserPage /> },
      {path: "user/:id", element: <UserDetails></UserDetails>}
    ],
  },
]);
export default router;
