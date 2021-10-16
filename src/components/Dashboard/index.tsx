import { FormEvent, useState } from "react";
import { Calculator, Card, Container, InputContainer, InputIconContainer, RadioBox, TransactionTypeContainer } from "./styles";
import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";

export function Dashboard() {
  const [type, setType] = useState("ten");
  const [bill, setBill] = useState(0);
  const [value, setValue] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);

  function handleCreateNewTip(event: FormEvent) {
    event.preventDefault();

    const data = { type, bill, value, numberPeople };
  }

  return (
    <Container onSubmit={handleCreateNewTip}>
      <Calculator>
        <InputContainer>
          <label>Bill</label>
          <InputIconContainer>
            <img src={dollar} alt="dollar"></img>
            <input placeholder="$" type="text" value={bill} onChange={(event) => setBill(Number(event.target.value))} />
          </InputIconContainer>
        </InputContainer>

        <InputContainer>
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

            <InputIconContainer>
              <input placeholder="custom" value={value} onFocus={() => setType("none")} onChange={(event) => setValue(Number(event.target.value))} />
            </InputIconContainer>
          </TransactionTypeContainer>
        </InputContainer>

        <InputContainer>
          <label>Number of People</label>
          <InputIconContainer>
            <img src={person} alt="person"></img>
            <input value={numberPeople} onChange={(event) => setNumberPeople(Number(event.target.value))} />
          </InputIconContainer>
        </InputContainer>
      </Calculator>
      <Card></Card>
    </Container>
  );
}
