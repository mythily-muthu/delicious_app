import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let [input, setInput] = useState("");
  let navigate = useNavigate();

  let submitHandle = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle>
      <Wrap>
        <input
          type={"text"}
          placeholder="Cookies . ."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FaSearch onClick={submitHandle} />
      </Wrap>
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
    position: relative;

    ::placeholder {
      color: white;
      font-size: large;
      font-weight: bold;
    }
  }
`;
let Wrap = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin-top: 65px;
    position: absolute;
    margin-left: 210px;
    font-size: large;
    display: flex;
    align-items: center;
    background-color: #e8b0b4;
    color: white;
    cursor: pointer;
  }
`;

export default Search;
