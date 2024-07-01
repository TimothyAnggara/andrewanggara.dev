import {createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import App from "../../App";
import FirstWebsite from "../BlogPages/FirstWebsite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"", element: <Home />},
      {path:"first_website", element: <FirstWebsite />},
    ]
  }
])