import styled from "styled-components";

export const MenuStyle = styled.div`
  background-color: transparent;
  color: white;
  padding: 50px;
  display: grid;
  grid-template-columns: 300px 450px;
  grid-gap: 1.25em;

  img {
    object-fit: cover;
    height: 420px;
    width: 280px;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 0 1px 15px 1px;
    grid-row: 1/8;
  }
  h1 {
    font-size: 13px;
    background-color: transparent;
  }

  h2 {
    background-color: transparent;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 60px;
    text-align: left;
  }
  h3 {
    background-color: transparent;
    font-family: "Reenie Beanie", cursive;
    font-size: 30px;
    text-align: left;
  }
  h4 {
    background-color: transparent;
  }

  //button

  button {
    --primary-color: white;
    --hovered-color: #c84747;
    position: relative;
    display: flex;
    font-weight: 600;
    gap: 0.5rem;
    align-items: center;
    width: 20%;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    font-family: "Patrick Hand SC", cursive;
  }

  button a {
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    position: relative;
    font-size: 25px;
    color: var(--primary-color);
  }

  button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: -7px;
    background: var(--hovered-color);
    height: 2px;
    transition: 0.3s ease-out;
  }

  button:hover::after {
    width: 100%;
  }

  button:hover a::before {
    width: 100%;
  }

  button:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
  }

  button svg {
    color: var(--primary-color);
    transition: 0.2s;
    position: relative;
    width: 15px;
    transition-delay: 0.2s;
    background-color: transparent;
    font-size: 25px;
  }

  // when screen is small
  @media only screen and (max-width: 1005px) {
    padding: 25px;
    display: flex;
    flex-direction: column;
    grid-gap: 0px;
    img {
      height: 250px;
      width: 200px;
      margin: auto;
      text-align: center;
    }
    h2 {
      font-size: 25px;
      background-color: transparent;
      margin: auto;
      text-align: center;
      margin-top: 40px;
    }
    h3 {
      margin-top: 10px;
      text-align: center;
    }
    button a {
      margin-top: -10px;
      padding-left: 10%;
    }
  }
`;
