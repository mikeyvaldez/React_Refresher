import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
    tags: "under_30_minutes",
  },
  headers: {
    "x-rapidapi-key": "eb7d57e24cmsha731420738da583p10e56fjsnee0ad146d635",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    setRecipes(null);
    setError(null);
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (err) {      
      setError(err.message);
      setLoading(false);
    }
  };
  return [recipes, loading, error];
};

export default useFetchRecipes;
