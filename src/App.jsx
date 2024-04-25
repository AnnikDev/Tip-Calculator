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

  @media screen and (max-width: 765px) {
    margin: 4rem auto;
  }
`;

const Container = styled.div`
  height: 48.1rem;
  padding: 3.2rem;
  background-color: #fff;
  border-radius: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 950px) {
    width: 72rem;
    height: 40.1rem;
    padding: 3rem;
  }

  @media screen and (max-width: 765px) {
    width: auto;
    height: auto;
    padding: 2rem;
    flex-direction: column;
  }
`;

export default App;
