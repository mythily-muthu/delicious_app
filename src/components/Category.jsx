import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <Link to={"/cuisine/Italian"} style={{ textDecoration: "none" }}>
        <SLink>
          <FaPizzaSlice />
          <h3>Italian</h3>
        </SLink>
      </Link>

      <Link to={"/cuisine/American"} style={{ textDecoration: "none" }}>
        <SLink>
          <FaHamburger />
          <h3>American</h3>
        </SLink>
      </Link>

      <Link to={"/cuisine/Thai"} style={{ textDecoration: "none" }}>
        <SLink>
          <GiNoodles />
          <h3>Thai</h3>
        </SLink>
      </Link>

      <Link to={"/cuisine/Japanese"} style={{ textDecoration: "none" }}>
        <SLink>
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
`;

let SLink = styled.div`
  display: flex;
  gap: 10px;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;

  h3 {
    color: rgb(115, 213, 35);
    font-weight: bold;
    text-decoration: none !important;
  }
`;

export default Category;
