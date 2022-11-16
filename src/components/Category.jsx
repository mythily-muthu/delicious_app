import React, { useState } from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  return (
    <List>
      <Link to={"/cuisine/Italian"} style={{ textDecoration: "none" }}>
        <SLink
          onClick={() => setSelectedCuisine("italian")}
          className={`${selectedCuisine === "italian" && "selected_cuisine"}`}
        >
          <FaPizzaSlice />
          <h3>Italian</h3>
        </SLink>
      </Link>

      <Link to={"/cuisine/American"} style={{ textDecoration: "none" }}>
        <SLink
          onClick={() => setSelectedCuisine("american")}
          className={`${selectedCuisine === "american" && "selected_cuisine"}`}
        >
          <FaHamburger />
          <h3>American</h3>
        </SLink>
      </Link>

      <Link to={"/cuisine/Thai"} style={{ textDecoration: "none" }}>
        <SLink
          onClick={() => setSelectedCuisine("thai")}
          className={`${selectedCuisine === "thai" && "selected_cuisine"}`}
        >
          <GiNoodles />
          <h3>Thai</h3>
        </SLink>
      </Link>

      <Link to={"/cuisine/Japanese"} style={{ textDecoration: "none" }}>
        <SLink
          onClick={() => setSelectedCuisine("japanese")}
          className={`${selectedCuisine === "japanese" && "selected_cuisine"}`}
        >
          <GiChopsticks />
          <h3>Japanese</h3>
        </SLink>
      </Link>
    </List>
  );
};

let List = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 6%;
  // background-color: #d9e5d7; ;
  background-color: #f2faf0;
`;

let SLink = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  h3 {
    color: #945d60;
    font-weight: bold;

    text-decoration: none !important;
  }
`;

export default Category;
