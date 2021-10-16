import { lighten } from "polished";
import styled from "styled-components";

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "greenlight";
}

const colors = {
  green: "#133c3e",
  greenlight: "#9fe8df",
};

export const Container = styled.div`
  padding: 2rem;
  background: var(--shape);
  width: 400px;
  height: auto;
  margin: 0 auto;

  display: flex;
  align-items: center;
  border-radius: 10px;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;

    border: 1px solid #5da99f;
    color: var(--text-body);
    background: #f3f8fb;

    font-weight: 400;
    font-size: 1rem;

    text-align: right;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus-visible {
      outline: none;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  #dollar {
    background-image: url(../../assets/icon-dollar.svg);
  }
`;

export const Calculator = styled.div``;

export const TransactionTypeContainer = styled.div`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 2rem;
  border: 2px solid transparent;
  border-radius: 0.25rem;

  background: ${(props) => (props.isActive ? "#9fe8df" : "#133c3e")};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    /* border-color: ${(props) => (props.isActive ? lighten(0.1, "#133c3e") : "")}; */
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    font-size: 1rem;

    color: ${(props) => (props.isActive ? "#133c3e" : "#fff")};
  }
`;

export const Card = styled.div``;

export const InputContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const InputIconContainer = styled.div`
  display: flex;

  img {
    height: min-content;
    position: absolute;
    margin: 8px 14px;
  }
`;
