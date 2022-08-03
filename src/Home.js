import { useNavigate } from "react-router-dom";
import { StyledTitle } from "./styles/Home-styled";

function Home() {
  let navigate = useNavigate();
  return (
    <StyledTitle>
      <div className="title">
        <img src="./images/FeedMe.png" alt="feedme" />
        <h1>Pick the meal & Enjoy your food</h1>
      </div>

      <button
        onClick={() => {
          navigate("/feedtime");
        }}
      >
        Feed Time
      </button>
    </StyledTitle>
  );
}

export default Home;
