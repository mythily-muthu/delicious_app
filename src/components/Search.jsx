import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <FormStyle>
      <input type={"text"}></input>
    </FormStyle>
  );
};

let FormStyle = styled.div`
  width: 100%;

  input {
    padding: 2rem;
    border: none;
    color: white;
    background-color: rgb(115, 213, 35);
  }
`;

export default Search;
