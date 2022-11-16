import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  let [details, setDetails] = useState({});
  let [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    let data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    let response = await data.json();
    setDetails(response);
    console.log(response);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        ;
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}> {ingredient.original}</li>;
            })}
          </ul>
        )}
        ;
      </Info>
    </DetailWrapper>
  );
};

let DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #945d60;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

let Button = styled.div`
  padding: 1rem, 2rem;
  color: white;
  background-color: #945d60;
  border: 2px solid white;
  margin-right: 2rem;

  font-weight: 600;
`;
let Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
