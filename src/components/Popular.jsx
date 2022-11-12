import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Popular = () => {
  let [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    let data = await response.json();
    // console.log(data);
    setPopular(data.recipes);
    setLoading(false);
  };

  return (
    <div>
      <Wrapper>
        <h3>Trending</h3>
        {loading ? (
          <h3
            style={{
              height: "351px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            loading...
          </h3>
        ) : (
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              arrows: false,
              drag: "true",
              pagination: false,
            }}
          >
            {popular.map((recipe) => {
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
  height: 350px;
  width: 350px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    bottom: 20px;
    padding: 10px;
    font-size: 22px;
    z-index: 10;
    color: white;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

let Gradient = styled.div``;

export default Popular;
