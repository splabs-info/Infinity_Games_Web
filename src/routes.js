import { Navigate, useRoutes } from "react-router-dom";
import ClientLayout from "./layouts";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/Page404";
import ComingSoon from "./pages/ComingSoon";
import DeepSeaDivers from "./games/DeepSeeDivers";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([

    {
      path: "/",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <Homepage /> },
      ],
    },
    { path: "games/deep-sea-divers", element: <DeepSeaDivers /> },
    { path: "404", element: <NotFound /> },
    { path: "coming-soon", element: <ComingSoon /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
