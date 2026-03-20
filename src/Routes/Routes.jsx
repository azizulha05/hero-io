import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Homes from "../Pages/Home/Homes";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import Contribute from "../Pages/Contribute/Contribute";
import PagesError from "../components/Error/PagesError";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <PagesError />,
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Homes,
        loader: () => fetch("appData .json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("appData .json"),
      },
      { path: "/installation", Component: Installation },
      { path: "/contribute", Component: Contribute },
    ],
  },
]);

export default routes;