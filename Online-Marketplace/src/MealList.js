
import React from 'react';
import { Link } from 'react-router-dom';

function MealList({ books }) {
  const meals = books.meals;

  if (meals != null) {
    return (
      <div className="meal-list">
        {meals.map((meal) => (
          <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
            <div className="meal">
              <img
                className="meal__image"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div className="meal__details">
                <h2 className="meal__title">{meal.strMeal}</h2>
                <p className="meal__category">{meal.strCategory}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default MealList;
