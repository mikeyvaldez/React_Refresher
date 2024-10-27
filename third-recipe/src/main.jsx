import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<>
  <Route path="/" element={<App />} />
  <Route path="/about" element={<AboutPage />} />
  </>)
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
