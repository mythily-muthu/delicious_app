import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Popular = () => {
  let [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
    );
    let data = await response.json();
    console.log(data);
    setPopular(data.recipes);
    setLoading(false);
  };

  return (
    <div>
      <Wrapper>
        <h2>Our trending picks</h2>
        {loading ? (
          <img
            style={{
              height: "150px",
              width: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            src="LODING..."
            alt="loading..."
          />
        ) : (
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              arrows: false,
              drag: "true",
              pagination: false,
            }}
          >
            {popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={"/recipe/" + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </Wrapper>
    </div>
  );
};

let Wrapper = styled.div`
  margin: 4rem;
  //background-color: #f1f8f0;
`;

let Card = styled.div`
  height: 320px;
  width: 300px;
  border: solid 5px black
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  gap: 20px;
  cursor: pointer;
  

  img {
    border-radius: 2rem;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    
  }
  p {
    position: absolute;
    bottom: 0%;
    padding: 10px;
    font-size: 0.9rem;
    width: 100%;
    z-index: 10;
   
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #945d60;
    background-color:white;
    height: 50px;
  }
`;

let Gradient = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.001));
`;

export default Popular;
