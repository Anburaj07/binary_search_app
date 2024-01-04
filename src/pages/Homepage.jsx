import React from "react";
import InputForm from "../components/InputForm";
import BinarySearch from "../components/BinarySearch";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Homepage = () => {
  const searchInput = useSelector((store) => {
    return store.searchInput;
  });
  let key = searchInput.key;
  return (
    <DIV>
      <InputForm />
      {key && <BinarySearch />}
    </DIV>
  );
};

export default Homepage;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
`;
