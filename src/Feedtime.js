import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledFeedTime, Div, Container } from "./styles/Feedtime-styled";
import { Button } from "./styles/Button-styled";
import { BtnFeedMe } from "./styles/BTNfeedMe";

function Feedtime() {
  let navigate = useNavigate();
  return (
    <>
      <StyledFeedTime>
        <Div>
          <h1>Choose</h1>
          <BtnFeedMe>
            <div class="wrapper">
              <img src="./images/FoodTime.png" alt="Food" />
              <div class="my-super-cool-btn">
                <div class="dots-container">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
                <span>Feed Me!</span>
              </div>
            </div>

            <div class="wrapper">
              <img src="./images/DrinksTime.png" alt="Drinks" />
              <div class="my-super-cool-btn">
                <div class="dots-container">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
                <span>Feed Me!</span>
              </div>
            </div>

            <div class="wrapper">
              <img src="./images/DesertTime.png" alt="Deserts" />
              <div class="my-super-cool-btn">
                <div class="dots-container">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
                <span>Feed Me!</span>
              </div>
            </div>
          </BtnFeedMe>

          <Button
            bc="#ffffff"
            color="#ffffff"
            onClick={() => {
              navigate("/Home");
            }}
          >
            Back
          </Button>
          <Button
            bc="#ffffff"
            color="#ffffff"
            onClick={() => {
              navigate("/Option");
            }}
          >
            Option
          </Button>
        </Div>
      </StyledFeedTime>
      <section>
        <nav>
          <ul>
            <li>Add Option</li>
            <li>Restaurants nearby</li>
            <li>Leave a feedback</li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Feedtime;
