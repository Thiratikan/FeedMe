import styled from "styled-components";

export const BoxStyle = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  border-width: 20px;
  border-color: red;
  width: 850px;
  height: 620px;
  transition: fixed;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  button {
    font-size: 18px;
    color: white;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 1005px) {
    margin-top: 35px;
    width: 90%;
    height: 570px;
  }
`;

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  color: white;
  &:target {
    visibility: visible;
    opacity: 1;
  }
`;
