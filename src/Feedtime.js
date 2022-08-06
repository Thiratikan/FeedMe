import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledFeedTime, Div } from "./styles/Feedtime-styled";
import { Button } from "./styles/Button-styled";
import { BtnFeedMe } from "./styles/BTNfeedMe";
import ModelBox from "./ModelBox";

function Feedtime() {
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();
  return (
    <>
      <StyledFeedTime>
        <Div>
          <h1>Choose</h1>
          <BtnFeedMe>
            <div className="wrapper">
              <img src="./images/FoodTime.png" alt="Food" />
              <div className="my-super-cool-btn">
                <div className="dots-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span onClick={() => setIsOpen(true)}>Feed Me!</span>
              </div>
            </div>

            <div className="wrapper">
              <img src="./images/DrinksTime.png" alt="Drinks" />
              <div className="my-super-cool-btn">
                <div className="dots-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span onClick={() => setIsOpen(true)}>Feed Me!</span>
              </div>
            </div>

            <div className="wrapper">
              <img src="./images/DesertTime.png" alt="Deserts" />
              <div className="my-super-cool-btn">
                <div className="dots-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span onClick={() => setIsOpen(true)}>Feed Me!</span>
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
        <ModelBox open={isOpen} onClose={() => setIsOpen(false)}></ModelBox>
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
