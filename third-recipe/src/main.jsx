import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />)
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
