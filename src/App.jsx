import { useState } from "react";
import "./App.css";
import "./index.css";
import styled from "styled-components";
import InputContainer from "./components/InputContainer/Input";
import OutputContainer from "./components/OutputContainer/Output";

function App() {
  return (
    <>
      <Splitter src="./images/logo.svg" alt="splitter" />
      <Container>
        <InputContainer />
        <OutputContainer />
      </Container>
    </>
  );
}

const Splitter = styled.img`
  margin: 2rem auto 8.7rem;
  display: flex;
  justify-content: center;
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
