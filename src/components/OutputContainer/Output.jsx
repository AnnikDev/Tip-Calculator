import styled from "styled-components";

export default function OutputContainer() {
  return (
    <OutputComponent>
      <TipAmount>
        <div className="resultTitle">
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <p className="result">$0.00</p>
      </TipAmount>

      <TipAmount>
        <div className="resultTitle">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p className="result">$0.00</p>
      </TipAmount>

      <Reset>RESET</Reset>
    </OutputComponent>
  );
}

const OutputComponent = styled.div`
  width: 41.3rem;
  height: 41.7rem;
  padding: 4rem;
  border-radius: 1.5rem;
  background-color: #00474b;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Reset = styled.button`
  width: 33.3rem;
  height: 4.8rem;
  border-radius: 0.5rem;
  background-color: #9fe8df;
  font-size: 2rem;
  font-weight: bold;
  color: #00474b;
  margin-top: 9.7rem;
  cursor: pointer;
`;

const TipAmount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & .resultTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .resultTitle p {
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
  }

  & .resultTitle span {
    font-size: 1.3rem;
    font-weight: bold;
    color: #7f9d9f;
  }

  & .result {
    font-size: 4.8rem;
    font-weight: bold;
    color: #26c2ae;
  }
`;
