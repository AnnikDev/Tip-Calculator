import { useState } from "react";
import "./App.css";
import "./index.css";
import styled from "styled-components";
import InputContainer from "./components/InputContainer/Input";
import OutputContainer from "./components/OutputContainer/Output";

function App() {
  return (
    <>
      <Splitter>SPLITTER</Splitter>
      <Container>
        <InputContainer />
        <OutputContainer />
      </Container>
    </>
  );
}

const Splitter = styled.h1`
  font-size: 1.6rem;
  letter-spacing: 0.2cm;
  color: #3d6666;
  word-wrap: break-word;
  width: 8.6rem;
  margin: 2rem auto 8.7rem;
`;

const Container = styled.div`
  width: 92rem;
  height: 48.1rem;
  padding: 3.2rem 3.2rem 3.2rem 4.8rem;
  background-color: #fff;
  border-radius: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default App;
