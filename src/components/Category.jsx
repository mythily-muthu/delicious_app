import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </SLink>

      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h3>American</h3>
      </SLink>

      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h3>Thai</h3>
      </SLink>

      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h3>Japanese</h3>
      </SLink>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  h3 {
    color: rgb(115, 213, 35);
    font-weight: bold;
  }
`;

export default Category;
