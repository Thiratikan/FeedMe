import styled from "styled-components";

export const BoxStyle = styled.div`
  font-family: "Heebo", sans-serif;
  padding: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  width: 350px;
  height: 400px;
  transition: fixed;
  margin-left: auto;
  margin-right: auto;
  header {
    margin: 0;
    background-color: transparent;
    text-align: right;
  }
  body {
    text-align: left;
    background-color: transparent;
    margin-top: 10px;
  }

  button {
    font-size: 18px;
    color: white;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    letter-spacing: 1.5px;
  }
  div {
    background-color: transparent;
  }
  label {
    background-color: transparent;
  }
  select {
    color: black;
    background-color: white;
    width: 75px;
  }
  input {
    color: black;
    background-color: white;
  }
`;

export const Div = styled.div`
  background-color: transparent;
  margin-top: 5px;
  margin-bottom: 5px;

  input,
  select {
    margin-left: 5px;
  }
`;

export const ButtonSection = styled.div`
  margin-top: 20px;
  button {
  }
`;
