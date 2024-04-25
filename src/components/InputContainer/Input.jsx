import styled from "styled-components";
import "./input.css";
import OutputContainer from "../OutputContainer/Output";

export default function InputContainer() {
  const arr = ["5%", "10%", "15%", "25%", "50%"];
  return (
    <InputComponent>
      <form className="billInput" action="">
        <label htmlFor="">Bill</label>
        <div className="dollarInput">
          <img
            className="dollarIcon"
            src="./src/assets/dollar-icon.svg"
            alt=""
          />
          <input type="text" name="" id="" />
        </div>
      </form>

      <div className="tipButtons">
        <p className="tipTitle">Select Tip %</p>
        <div className="buttons">
          {arr.map((el) => {
            return <TipPerc>{el}</TipPerc>;
          })}
          <input placeholder="Custom" className="customInput" />
        </div>
      </div>

      <form className="peopleInput" action="">
        <label htmlFor="">Number of People</label>
        <br></br>
        <div className="personInput">
          <img
            className="personIcon"
            src="./src/assets/person-icon.svg"
            alt=""
          />
          <input type="text" name="" id="" />
        </div>
      </form>
    </InputComponent>
  );
}

const InputComponent = styled.div`
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const TipPerc = styled.button`
  width: 11.7rem;
  height: 4.8rem;
  border-radius: 0.5rem;
  background-color: #00474b;
  font-size: 2.4rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  &&:hover {
    background-color: #26c2ae;
    color: #00474b;
  }
`;
