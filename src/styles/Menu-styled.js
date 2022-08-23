import styled from "styled-components";

export const MenuStyle = styled.div`
  background-color: transparent;
  color: white;
  padding: 50px;
  display: grid;
  grid-template-columns: 0.1fr 2fr 2fr 5fr;

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
  button a {
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
  }

  //button

  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
  }

  button {
    --primary-color: white;
    --hovered-color: #c84747;
    position: relative;
    display: flex;
    font-weight: 600;
    font-size: 20px;
    gap: 0.5rem;
    align-items: center;
  }

  button a {
    margin: 0;
    position: relative;
    font-size: 20px;
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

  button a::before {
    position: absolute;
    /*   box-sizing: border-box; */
    content: "Subscribe";
    width: 0%;
    inset: 0;
    color: var(--hovered-color);
    overflow: hidden;
    transition: 0.3s ease-out;
  }

  button:hover::after {
    width: 100%;
  }

  button:hover p::before {
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
  }
`;
