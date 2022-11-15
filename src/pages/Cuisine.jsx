import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

let Cuisine = () => {
  let [cuisine, setCuisine] = useState([]);
  let params = useParams();

  let getCuisine = async (name) => {
    let reaponse = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    let data = await reaponse.json();
    console.log(data);
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </Card>
        );
      })}
      ;
    </div>
  );
};

let Card = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 6rem;
  gap: 2rem;

  img {
    border-radius: 2rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  h3 {
    font-size: medium;
    font-weight: bold;
    text-align: center;
  }
`;

export default Cuisine;
