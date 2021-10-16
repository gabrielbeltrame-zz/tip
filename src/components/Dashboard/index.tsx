import { FormEvent, useState } from "react";
import { Calculator, Card, Container, RadioBox, TransactionTypeContainer } from "./styles";

export function Dashboard() {
  const [type, setType] = useState("ten");
  const [bill, setBill] = useState(142.55);
  const [numberPeople, setNumberPeople] = useState(0);

  function handleCreateNewTip(event: FormEvent) {
    event.preventDefault();

    const data = { type, bill, numberPeople };
  }

  return (
    <Container onSubmit={handleCreateNewTip}>
      <Calculator>
        <label>Bill</label>
        <input placeholder="$" value={bill} onChange={(event) => setBill(Number(event.target.value))} />

        <label>Select Tip %</label>
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("five");
            }}
            isActive={type === "five"}
            activeColor="greenlight"
          >
            <span>5%</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("ten");
            }}
            isActive={type === "ten"}
            activeColor="greenlight"
          >
            <span>10%</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("fifteen");
            }}
            isActive={type === "fifteen"}
            activeColor="greenlight"
          >
            <span>15%</span>
          </RadioBox>
        </TransactionTypeContainer>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("twentyfive");
            }}
            isActive={type === "twentyfive"}
            activeColor="greenlight"
          >
            <span>25%</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("fifty");
            }}
            isActive={type === "fifty"}
            activeColor="greenlight"
          >
            <span>50%</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("custom");
            }}
            isActive={type === "custom"}
            activeColor="greenlight"
          >
            <span>?%</span>
          </RadioBox>
        </TransactionTypeContainer>

        <label>Number of People</label>
        <input value={numberPeople} onChange={(event) => setNumberPeople(Number(event.target.value))} />
      </Calculator>
      <Card></Card>
    </Container>
  );
}
