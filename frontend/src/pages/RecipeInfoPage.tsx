import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
      <p>
        <strong>Country:</strong> {recipe.strArea}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.strInstructions}
      </p>
    </div>
  );
};

export default RecipeInfoPage;
