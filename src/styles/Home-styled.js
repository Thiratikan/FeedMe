import styled from "styled-components";

export const StyledTitle = styled.div`
  background-color: #272525;

  img {
    height: 100%;
    width: ${(props) => (props.width ? props.width : "65%")};
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8%;
  }

  h1 {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: normal;
    color: white;
    padding-top: 2.5%;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
  }

  button {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: bolder;
    color: rgb(241, 174, 49);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    box-sizing: border-box;
    cursor: pointer;
    border-color: rgb(241, 174, 49);
    border-radius: 100px;
    font-size: 19px;
    background: #272525;
    width: 100px;
    height: 100px;
    padding: 22px;
  }
`;
