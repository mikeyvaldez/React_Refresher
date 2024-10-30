import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(  
  <Route path="/" element={<App />} errorElement={<ErrorPage />} >  {/**parent route */}
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />    
    <Route path="/recipe/:id" element={<RecipePage />} >
      <Route path="/recipe/:id/ingredients" element={<h1>Ingredients</h1>} />
      <Route path="/recipe/:id/instructions" element={<h1>Instructions</h1>} />
    </Route>
  </Route>
  )
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
