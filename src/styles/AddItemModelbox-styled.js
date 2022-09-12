import styled from "styled-components";

export const BoxStyle = styled.div`
  font-family: "Heebo", sans-serif;
  padding: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  width: 450px;
  height: 450px;
  transition: fixed;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  h1 {
    font-family: "Monoton", cursive;
    background-color: transparent;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 5px;
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
    letter-spacing: 1px;
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
  form {
    background-color: transparent;
  }
`;

export const Div = styled.div`
  background-color: transparent;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ButtonSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const Info = styled.div`
  margin-left: 10%;
`;

export const TopEdit = styled.div`
  margin-bottom: 20px;

  margin-left: 20px;

  input {
    color: black;
    background-color: white;
    cursor: pointer;
    width: 80%;
    height: 50px;
    outline: transparent;
    text-align: center;
    border-radius: 30px;
  }
`;
export const BottomEdit = styled.div`
  margin: 0px;
  margin-left: 40px;
  input {
    width: 65%;
    border-radius: 0px;
    outline: transparent;
    background-color: transparent;
    text-align: center;
  }
`;
