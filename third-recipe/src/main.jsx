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
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(  
  <Route path="/" element={<App />}>  {/**parent route */}
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Route>
  )
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
