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
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return [recipes]
};

export default useFetchRecipes;
