import styled from "styled-components";

export const BtnFeedMe = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bold;

  span {
    color: black;
    font-display: inherit;
    background-color: transparent;
  }
  .wrapper {
    box-sizing: border-box;
    display: inline-block;
    align-items: center;
    justify-content: center;
  }

  .my-super-cool-btn {
    position: absolute;
    text-decoration: none;
    color: black;
    letter-spacing: 1px;
    font-size: 20px;
    box-sizing: border-box;
    background-color: transparent;
    cursor: pointer;
    margin-top: -300px;
    margin-left: 100px;
  }
  .my-super-cool-btn span {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
  }
  .my-super-cool-btn span::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    border-radius: 100%;
    border: 7px solid black;
    box-sizing: border-box;
    transition: all 0.85s cubic-bezier(0.25, 1, 0.33, 1);
    box-shadow: 0 30px 85px rgba(0, 0, 0, 0.14), 0 15px 35px rgba(0, 0, 0, 0.14);
    background-color: transparent;
  }
  .my-super-cool-btn:hover span:before {
    transform: scale(0.8);
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.14), 0 15px 35px rgba(0, 0, 0, 0.14);
  }
  .my-super-cool-btn .dots-container {
    opacity: 0;
    animation: intro 1.6s;
    animation-fill-mode: forwards;
  }
  .my-super-cool-btn .dot {
    width: 8px;
    height: 8px;
    display: block;
    background-color: black;
    border-radius: 100%;
    position: absolute;
    transition: all 0.85s cubic-bezier(0.25, 1, 0.33, 1);
  }
  .my-super-cool-btn .dot:nth-child(1) {
    top: 50px;
    left: 50px;
    transform: rotate(-140deg);
    animation: swag1-out 0.3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .my-super-cool-btn .dot:nth-child(2) {
    top: 50px;
    right: 50px;
    transform: rotate(140deg);
    animation: swag2-out 0.3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .my-super-cool-btn .dot:nth-child(3) {
    bottom: 50px;
    left: 50px;
    transform: rotate(140deg);
    animation: swag3-out 0.3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .my-super-cool-btn .dot:nth-child(4) {
    bottom: 50px;
    right: 50px;
    transform: rotate(-140deg);
    animation: swag4-out 0.3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .my-super-cool-btn:hover .dot:nth-child(1) {
    animation: swag1 0.3s;
    animation-fill-mode: forwards;
  }
  .my-super-cool-btn:hover .dot:nth-child(2) {
    animation: swag2 0.3s;
    animation-fill-mode: forwards;
  }
  .my-super-cool-btn:hover .dot:nth-child(3) {
    animation: swag3 0.3s;
    animation-fill-mode: forwards;
  }
  .my-super-cool-btn:hover .dot:nth-child(4) {
    animation: swag4 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes intro {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes swag1 {
    0% {
      top: 50px;
      left: 50px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      top: 20px;
      left: 20px;
      width: 8px;
      opacity: 1;
    }
  }
  @keyframes swag1-out {
    0% {
      top: 20px;
      left: 20px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      top: 50px;
      left: 50px;
      width: 8px;
      opacity: 0;
    }
  }
  @keyframes swag2 {
    0% {
      top: 50px;
      right: 50px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      top: 20px;
      right: 20px;
      width: 8px;
      opacity: 1;
    }
  }
  @keyframes swag2-out {
    0% {
      top: 20px;
      right: 20px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      top: 50px;
      right: 50px;
      width: 8px;
      opacity: 0;
    }
  }
  @keyframes swag3 {
    0% {
      bottom: 50px;
      left: 50px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      bottom: 20px;
      left: 20px;
      width: 8px;
      opacity: 1;
    }
  }
  @keyframes swag3-out {
    0% {
      bottom: 20px;
      left: 20px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      bottom: 50px;
      left: 50px;
      width: 8px;
      opacity: 0;
    }
  }
  @keyframes swag4 {
    0% {
      bottom: 50px;
      right: 50px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      bottom: 20px;
      right: 20px;
      width: 8px;
      opacity: 1;
    }
  }
  @keyframes swag4-out {
    0% {
      bottom: 20px;
      right: 20px;
      width: 8px;
    }
    50% {
      width: 30px;
      opacity: 1;
    }
    100% {
      bottom: 50px;
      right: 50px;
      width: 8px;
      opacity: 0;
    }
  }
`;
