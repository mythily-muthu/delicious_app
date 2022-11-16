import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Veggie = () => {
  let [veggie, setVeggie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
    );
    let data = await response.json();
    //console.log(data);
    setVeggie(data.recipes);
    setLoading(false);
  };
  console.log("loading:", loading);

  return (
    <div>
      <Wrapper>
        <h2>Top veggie picks</h2>
        {loading ? (
          <img
            style={{
              height: "20rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            src="https://i.pinimg.com/originals/71/28/f4/7128f41b9a653cc70f522bb6f275637f.gif"
            alt="Loding..."
          />
        ) : (
          <Splide
            options={{
              type: "loop",
              perPage: 5,
              arrows: false,
              drag: "true",
              pagination: false,
            }}
          >
            {veggie.map((recipe) => {
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
`;

let Card = styled.div`
  // margin-top: 10px;
  height: 200px;
  width: 270px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  //margin-top: 1.5rem;
  gap: 1rem;
  cursor: pointer;

  img {
    border-radius: 2.5rem;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    width: 100%;
    z-index: 10;
    bottom: 0%;
    top: 9rem;
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    justify-content: center;
    color: #945d60;
    background-color: white;
  }
`;

let Gradient = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.001));
`;

export default Veggie;
