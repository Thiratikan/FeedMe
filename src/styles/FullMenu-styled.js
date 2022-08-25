import styled from "styled-components";

export const FullMenuStyle = styled.div`
  color: white;
  h1 {
    margin-top: 35px;
    margin-bottom: 0px;
    text-align: center;
    color: white;
    font-family: "Monoton", cursive;
    font-weight: normal;
    font-size: 80px;
  }
  img {
    object-fit: cover;
    height: 250px;
    width: 220px;
    border: 0.25rem solid;
    border-color: black;
  }
  button {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 1005px) {
    h1 {
      margin-bottom: 1px;
    }
    section {
    }
  }
`;

export const ButtonStyle = styled.div`
  text-align: center;
  button {
    margin: 0px;
    margin-bottom: 70px;
    font-size: 12px;
  }
`;

export const ItemStyle = styled.div`
  font-family: "Rajdhani", sans-serif;
  section {
    display: flex;
    justify-content: center;
  }
  /* desc */
  p {
    width: 300px;
    font-size: 18px;
  }
  /* title */
  h4 {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 25px;
    width: 220px;
  }
  img {
    margin-right: 20px;
    margin-bottom: 30px;
  }
  /* link */
  a {
    text-decoration: none;
    color: #c84747;
    font-size: 18px;
  }
  @media only screen and (max-width: 1005px) {
    img {
      margin-bottom: 10px;
    }
  }
`;

export const CategoryStyle = styled.div`
  text-align: center;

  button {
    font-family: "Bungee", cursive;
    border-color: transparent;
    font-size: 30px;
    color: white;
    padding: 0.375rem 1rem;
    cursor: pointer;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 1005px) {
    margin-bottom: -30px;
    button {
      font-size: 25px;
    }
  }
`;
