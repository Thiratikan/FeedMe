import styled from "styled-components";

export const PageCover = styled.div`
  margin-bottom: 60px;
`;

export const StyledFeedTime = styled.section`
  nav {
    background: hsl(0 0% 100% /0.1);
  }
  img {
    width: 300px;
    height: 500px;
    border-radius: 2%;
    margin-right: 35px;
    box-shadow: 15px 15px white;
  }
  h1 {
    margin-top: 35px;
    margin-bottom: 40px;
    text-align: center;
    color: white;
    font-family: "Monoton", cursive;
    font-weight: normal;
    font-size: 80px;
  }
  @media only screen and (max-width: 1005px) {
    img {
      margin-bottom: 30px;
      height: 450px;
    }
    h1 {
      font-size: 70px;
    }
  }
`;
export const Div = styled.div`
  text-align: center;
`;

export const logo = styled.div`
  img {
    padding: 2rem;
    width: 10%;
    background-color: transparent;
  }
`;

export const Container = styled.div`
  #wrapper span {
    color: black;
    font-display: inherit;
    background-color: transparent;
  }
`;
