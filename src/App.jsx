import { useState } from "react";
import "./App.css";
import "./index.css";
import styled from "styled-components";
import InputContainer from "./components/InputContainer/Input";

function App() {
  return (
    <>
      <Splitter>SPLITTER</Splitter>
      <InputContainer/>
    </>
  );
}

const Splitter = styled.h1`
  font-size: 1.6rem;
  letter-spacing: 0.2cm;
  color: #3d6666;
  word-wrap: break-word;
  width: 8.6rem;
  margin: 16.3rem auto 8.7rem;
`;

export default App;
