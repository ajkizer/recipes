import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, serves, ingredients }) => {
  console.log(serves);
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>

      <img src={image} alt="" />
      <p>Calories: {Math.ceil(calories / 10 / parseInt(serves)) * 10}</p>
      <p>Serves: {serves}</p>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
