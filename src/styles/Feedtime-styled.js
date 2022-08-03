import styled from "styled-components";

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
    margin-top: 100px;
    margin-bottom: 100px;
    text-align: center;
    color: white;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: normal;
    font-size: 80px;
  }
  ul {
    color: white;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 18px;
    display: flex;
    gap: var(--gap, 1rem);
    text-decoration: none;
    list-style: none;
    position: fixed;
    margin-left: 2rem;
    flex-direction: column;
  }
  li {
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
