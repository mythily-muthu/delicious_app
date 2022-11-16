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
    // eslint-disable-next-line
  }, [params]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <ButtonContainer>
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
        </ButtonContainer>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul className="" style={{ listStyleType: "none", margin: 0 }}>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}> {ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

let DetailWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  gap: 20px;

  .active {
    border-bottom: 2px solid red;
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

let ButtonContainer = styled.div`
  display: flex;
`;

let Button = styled.div`
  padding: 1rem, 2rem;
  color: #e58282;
  /* border: 2px solid white; */
  margin-right: 2rem;
  cursor: pointer;

  font-weight: 600;
`;
let Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default Recipe;
