import styled from "styled-components";
import OutputContainer from "../OutputContainer/Output";

export default function InputContainer() {
  const btnsArr = ["5%", "10%", "15%", "25%", "50%"];
  return (
    <InputComponent>
      <form className="billInput" action="">
        <label htmlFor="">Bill</label>
        <div className="dollarInput">
          <img className="dollarIcon" src="./images/icon-dollar.svg" alt="" />
          <input type="text" name="" id="bill" placeholder="0" />
        </div>
      </form>

      <div className="tipButtons">
        <p className="tipTitle">Select Tip %</p>
        <div className="buttons">
          {btnsArr.map((el, i) => {
            return <TipPerc key={i}>{el}</TipPerc>;
          })}
          <input placeholder="Custom" className="customInput" />
        </div>
      </div>

      <form className="peopleInput" action="">
        <label htmlFor="">Number of People</label>
        <br></br>
        <div className="personInput">
          <img className="personIcon" src="./images/icon-person.svg" alt="" />
          <input type="text" name="" id="number" placeholder="0" />
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

  @media screen and (max-width: 950px) {
    gap: 2rem;
  }

  @media screen and (max-width: 765px) {
    margin-bottom: 3rem;
  }

  & .billInput label,
  .tipTitle,
  .peopleInput label {
    font-size: 1.6rem;
    font-weight: bold;
    color: #5e7a7d;

    @media screen and (max-width: 950px) {
      font-size: 1.4rem;
    }
  }

  & input {
    cursor: pointer;
  }

  & .billInput input {
    width: 37.9rem;
    height: 4.8rem;
    padding: 0.6rem 1.7rem 0.6rem 1.9rem;
    border-radius: 0.5rem;
    background-color: #f3f9fa;
    font-size: 2.4rem;
    font-weight: bold;
    color: #00474b;
    text-align: right;
    margin-top: 0.6rem;

    @media screen and (max-width: 950px) {
      width: 30.9rem;
      height: 4rem;
    }

    @media screen and (max-width: 400px) {
      width: 28rem;
    }
  }

  & .billInput input:hover,
  .customInput:hover,
  .peopleInput input:hover {
    border: solid 0.2rem #26c2ae;
  }

  & .dollarIcon {
    height: 1.6rem;
    opacity: 0.35;
    transform: translateX(3rem);
  }

  & .dollarInput {
    display: flex;
    align-items: center;
    transform: translateX(-1.5rem);
  }

  & .peopleInput input {
    width: 37.9rem;
    height: 4.8rem;
    padding: 0.6rem 1.7rem 0.6rem 1.9rem;
    border-radius: 0.5rem;
    background-color: #f3f9fa;
    font-size: 2.4rem;
    font-weight: bold;
    color: #00474b;
    text-align: right;
    margin-top: 0.6rem;

    @media screen and (max-width: 950px) {
      width: 30.9rem;
      height: 4rem;
    }

    @media screen and (max-width: 400px) {
      width: 28rem;
    }
  }

  & .personIcon {
    height: 1.6rem;
    opacity: 0.35;
    transform: translateX(3rem);
  }

  & .personInput {
    display: flex;
    align-items: center;
    transform: translateX(-1.5rem);
  }

  & .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    row-gap: 1.6rem;
    column-gap: 1.4rem;
    margin-top: 0.6rem;
    width: 37.9rem;

    @media screen and (max-width: 950px) {
      width: 30.9rem;
    }

    @media screen and (max-width: 400px) {
      width: 28rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  & .customInput {
    width: 11.7rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    background-color: #f3f9fa;
    font-size: 2.4rem;
    text-align: center;

    @media screen and (max-width: 950px) {
      width: 9rem;
      height: 4rem;
      font-size: 2rem;
    }

    @media screen and (max-width: 400px) {
      width: 13rem;
    }
  }

  & .customInput::placeholder {
    font-weight: bold;
    opacity: 1;
    color: #547878;
  }

  & ::placeholder {
    opacity: 0.35;
  }
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

  @media screen and (max-width: 950px) {
    width: 9rem;
    height: 4rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 400px) {
    width: 13rem;
  }
`;
