import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import { motion } from "framer-motion";
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
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

let Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;

let Card = styled.div`
  height: 220px;
  width: 340px;
  margin-top: 6rem;
  background-color: #f2faf0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.01) 0px 0px 0px 1px;
  gap: 1rem;
  border: none;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
  }

  h3 {
    margin-top: 1rem;
    font-size: medium;
    font-weight: bold;
    text-align: center;
    background-color: #f2faf0;
    // background-color: #d9e5d7;
  }
`;

export default Cuisine;
