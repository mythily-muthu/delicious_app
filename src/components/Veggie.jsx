import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Veggie = () => {
  let [veggie, setVeggie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
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
        <h3>Top veggie picks</h3>
        {loading ? (
          <h3
            style={{
              height: "20rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </h3>
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
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
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
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin-top: 1.5rem;

  img {
    border-radius: 2rem;
    position: absolute;
    object-fit: cover;
    width: 90%;
    height: 70%;
  }
  p {
    position: absolute;
    z-index: 10;
    color: white;
    top: 9rem;
    left: 10%;
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

let Gradient = styled.div`
  z-index: 10;
  position: absolute;
  width: 90%;
  height: 70%;
`;

export default Veggie;
