import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then((response) => setRecipes(response.data.meals || []))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="main-page">
      <h1 className="main-title">Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;
