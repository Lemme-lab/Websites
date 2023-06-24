import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inputs(props) {
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();

    const handleReturn = () => {
      navigate(-1);
    };
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
    }
  
    const handleChange1 = (event) => {
      var name_book = inputs.book.replace(/\s/g, '+')
      props.setname(name_book);
      console.log(name_book);
    }
  
    return (
      <div className="inputs-container">
        <h1>Search a Meal</h1>
        <div className="inputs-wrapper">
        <div>
          <input
            type="text"
            placeholder="Search Meal"
            name="book"
            value={inputs.book || ""} 
            onChange={handleChange}
          />
          <button onClick={handleChange1} className="search-button">
            Search
          </button>
          <button onClick={handleReturn} className="return-button">
          Return
        </button>
        </div>
        </div>
      </div>
    );
}

export default Inputs;