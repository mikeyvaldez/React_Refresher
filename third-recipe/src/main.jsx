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
import Ingredients from "./components/Ingredients.jsx";
import Instructions from "./components/Instruction.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(  
  <Route path="/" element={<App />} errorElement={<ErrorPage />} >  {/**parent route */}
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />    
    <Route path="/recipe/:id" element={<RecipePage />} >
      <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
      <Route path="/recipe/:id/instructions" element={<Instructions />} />
    </Route>
  </Route>
  )
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
