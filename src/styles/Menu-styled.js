import styled from "styled-components";

export const MenuStyle = styled.div`
  background-color: transparent;
  color: white;
  padding: 50px;
  display: grid;
  grid-template-columns: 0.1fr 0.5fr 1fr;

  img {
    object-fit: cover;
    height: 420px;
    width: 280px;
    border-radius: 30px;
    background-color: transparent;
    margin-top: 25px;
    grid-column: 1/3;
    grid-row: 1/3;
    margin-left: 100px;
    box-shadow: 0 1px 15px 1px;
  }
  h1 {
    font-size: 13px;
    background-color: transparent;
  }

  h2 {
    background-color: transparent;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 60px;
    margin-top: 15px;
    margin-left: 40px;
    text-align: left;
  }
  h3 {
    background-color: transparent;
    font-family: "Reenie Beanie", cursive;
    font-size: 30px;
    margin-top: -150px;
    margin-left: 40px;
    text-align: left;
  }
  h4 {
    background-color: transparent;
  }
`;
