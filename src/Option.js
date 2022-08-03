import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles/Button-styled";
import { Div } from "./styles/Feedtime-styled";
import { StyledOption } from "./styles/Option-styled";
import { StyledTitle } from "./styles/Home-styled";

function Option() {
  let navigate = useNavigate();
  return (
    <>
      <StyledTitle>
        <img src="./images/FeedMe.png" alt="feedme" />
      </StyledTitle>
      <Div>
        <Button
          bc="#ffffff"
          color="#ffffff"
          onClick={() => {
            navigate("/Feedtime");
          }}
        >
          Back
        </Button>
      </Div>
      <Div>
        <Button bc="#ffffff" color="#ffffff">
          ADD Option
        </Button>
      </Div>

      <Div>
        <Button bc="#ffffff" color="#ffffff">
          Restaurants near you
        </Button>
      </Div>

      <Div>
        <Button bc="#ffffff" color="#ffffff">
          Leave feedback
        </Button>
      </Div>
    </>
  );
}

export default Option;
