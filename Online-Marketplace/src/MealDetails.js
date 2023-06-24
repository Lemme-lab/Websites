import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';

function MealDetails() {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMealDetails(data.meals[0]);
      });
  }, [id]);


  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="meal-details-container">

  
    <div className="meal-details">
      {
        <div className="meal-details">
      {mealDetails && (
        <>
          <img
            className="meal-details__image"
            src={mealDetails.strMealThumb}
            alt={mealDetails.strMeal}
          />
          <h2 className="meal-details__title">{mealDetails.strMeal}</h2>
          <p className="meal-details__category">{mealDetails.strCategory}</p>
          <p className="meal-details__area">{mealDetails.strArea}</p>
          <h3 className="meal-details__subtitle">Ingredients</h3>
          <ul className="meal-details__ingredients">
            {Object.keys(mealDetails)
              .filter((key) => key.startsWith('strIngredient') && mealDetails[key])
              .map((key) => (
                <li key={key}>
                  {mealDetails[key]} ({mealDetails[`strMeasure${key.slice(-1)}`]})
                </li>
              ))}
          </ul>
          <h3 className="meal-details__subtitle">Instructions</h3>
          <p className="meal-details__instructions">{mealDetails.strInstructions}</p>
          {mealDetails.strTags && (
            <>
              <h3 className="meal-details__subtitle">Tags</h3>
              <p className="meal-details__tags">{mealDetails.strTags.replace(/,/g, ', ')}</p>
            </>
          )}
        </>
      )}
    </div>
      }
    </div>
  </div>
  
  );
}

export default MealDetails;