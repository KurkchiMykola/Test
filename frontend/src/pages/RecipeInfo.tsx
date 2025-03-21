import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeInfo.css";

const RecipeInfoPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/${id}`)
      .then((response) => setRecipe(response.data.meals[0]))
      .catch((error) => console.error(error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-info">
      <h1 className="recipe-title">{recipe.strMeal}</h1>
      <img
        className="image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width="300"
      />
      <p className="country-info">
        <strong>Country:</strong> {recipe.strArea}
      </p>
      <p className="instructions-info">
        <strong>Instructions:</strong> {recipe.strInstructions}
      </p>
    </div>
  );
};

export default RecipeInfoPage;
