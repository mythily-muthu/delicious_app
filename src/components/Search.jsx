import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <FormStyle>
      <input type={"text"} placeholder="Search"></input>
    </FormStyle>
  );
};

let FormStyle = styled.div`
  width: 100%;

  input {
    margin-top: 3rem;
    padding: 20px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: rgb(115, 213, 35);
    font-size: Bold;
  }
`;

export default Search;
