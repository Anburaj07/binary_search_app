import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BinarySearch = () => {
  const searchInput = useSelector((store) => {
    // console.log(store)
    return store.searchInput;
  });
  let array = searchInput.array;
  let key = searchInput.key;
  let state = "";
  let midArray = [];
  const binarySearch = (array, key) => {
    let l = 0;
    let h = array.length - 1;
    let arr = array.sort((a, b) => a - b);
    while (l <= h) {
      let mid = Math.floor((l + h) / 2);
      midArray.push(mid);
      if (arr[mid] == key) {
        state = "found";
        return;
      } else if (key < arr[mid]) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    state = "not found";
  };

  if (key) {
    binarySearch(array, key);
  }
  console.log(state);

  return (
    <DIV>
      <h2>Steps for Binary Search</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {array.map((el, ind) => (
          <BOX key={ind}>{el}</BOX>
        ))}
      </div>

      {midArray.map((mid) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {array.map((el, ind) => (
            <BOX style={{ backgroundColor: ind == mid && "#2745c9" }} key={ind}>
              {el}
            </BOX>
          ))}
        </div>
      ))}
      <h1>Key {state}!</h1>
    </DIV>
  );
};

export default BinarySearch;

const DIV = styled.div`
  width: 45%;
  margin: auto;
  margin-top: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #64c764;
  border-radius: 10px;

  h2{
    color: #a31188;
  }

  h1{
    color: #a35311;
  }
`;

const BOX = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid white;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
