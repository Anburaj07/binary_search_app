import React, { useState } from "react";
import styled from "styled-components";
import { setSearchInput } from "../redux/action";
import { useDispatch } from "react-redux";

const InputForm = () => {
  const [array, setArray] = useState("");
  const [key, setKey] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const arrayInput = array.split(",").map((num) => parseInt(num, 10));
    const keyInput = parseInt(key, 10);
    console.log(arrayInput, keyInput);
    dispatch(setSearchInput({ array: arrayInput, key: keyInput }));
  };
  return (
    <DIV>
      <form action="" onSubmit={handleSearch}>
        <h2>Binary Search</h2>
        <div>
          <label>Input Array </label>
          <input
            type="text"
            value={array}
            placeholder="Enter Array of numbers"
            onChange={(e) => setArray(e.target.value)}
          />
        </div>
        <div>
          <label> Search Key</label>
          <input
            type="text"
            placeholder="Enter Search key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <button type="submit"> Search</button>
      </form>
    </DIV>
  );
};

export default InputForm;

const DIV = styled.div`
  width: 35%;
  margin: auto;
  margin-top: 50px;
  form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  h2 {
    color: #a31188;
  }
  button {
    width: 35%;
    border-radius: 10px;
    margin-left: 100px;
    font-size: 20px;
  }
  button:hover {
    cursor: pointer;
    background-color: blue;
    border: 1px solid blue;
    color: white;
  }
  input {
    margin-left: 10px;
    font-size: 20px;
  }
  label {
    font-size: 20px;
  }
`;
