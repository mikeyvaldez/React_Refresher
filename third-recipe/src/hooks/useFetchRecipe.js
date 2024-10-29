import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: { id: "8138" },
  headers: {
    "x-rapidapi-key": "eb7d57e24cmsha731420738da583p10e56fjsnee0ad146d635",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};


const useFetchRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipe = async (id) => {
    setLoading(true);
    setRecipe(null);
    setError(null);
    try {
      const reqOptions = { ...options };
      reqOptions.params.id = id;
      const response = await axios.request(reqOptions);
      console.log(response);
      setRecipe(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return [fetchRecipe, { data: recipe, loading, error }];
};

export default useFetchRecipe;
