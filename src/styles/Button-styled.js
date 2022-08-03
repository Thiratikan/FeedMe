import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  border: 3px solid;
  padding: 0.25em 0.5em;
  color: ${({ color }) => color || "#fff"};
  border-color: ${({ bc }) => bc || "#333"};
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right: 20px;
  margin-top: 5%;
  text-align: center;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;

    @media (min-width: 768px) {
      padding: 0.25em 0.75em;
    }
  }
`;

export const FeedmeBTN = styled.button`
  button {
    border-radius: 100px;
    height: 300px;
    width: 300px;
  }
`;
