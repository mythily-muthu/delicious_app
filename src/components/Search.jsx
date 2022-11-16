import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <FormStyle>
      <input type={"text"} placeholder="Cookies . ." />
    </FormStyle>
  );
};

let FormStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    margin-top: 3rem;
    padding: 13px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px grey;
    border-radius: 20px;
    color: white;
    background-color: #e8b0b4;
    font-weight: Bold;
    font-size: large;

    ::placeholder {
      color: white;
      font-size: large;
      font-weight: bold;
    }
  }
`;

export default Search;
