import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <li>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <a href={recipe.link}>lien vers la recette</a>
      </li>
    </div>
  );
};

export default RecipeCard;
