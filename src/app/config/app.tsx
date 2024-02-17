import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/config/routes";
import { Providers } from "./providers";
import { getMe, useAuth } from "entities/auth";
import { useEffect } from "react";
import Cookies from "js-cookie";

function App() {
  const { isAuth, user } = useAuth();
  useEffect(() => {
    if (Cookies.get("access_token") && !user) getMe();
  }, [isAuth, user]);

  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
