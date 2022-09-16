import styled from "styled-components";

const Container = styled.main`
  width: 100%;

  color: #ffffff;

  .addPanel {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .addPanel h3 {
    font-family: 16px;
    font-weight: 600;

    color: rgba(248, 249, 250, 1);
  }

  .addPanel button {
    width: 33px;
    height: 33px;

    border: 1px solid rgba(33, 37, 41, 1);
    border-radius: 4px;

    background-color: rgba(33, 37, 41, 1);
    color: rgba(255, 255, 255, 1);

    cursor: pointer;

    align-items: center;
  }

  .addPanel button svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  section {
    height: 416px;
    /* max-height: ; */

    background-color: #212529;
  }

  section ul {
    margin: 0 auto;
    padding: 0;

    list-style: none;
    align-items: center;
  }

  li {
    max-width: 87vw;
    width: 700px;
    height: 49px;
    padding: 0 12px;
    margin: 0 auto 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(18, 18, 20, 1);

    border: 1px solid rgba(18, 18, 20, 1);
    border-radius: 4px;
  }

  .titleTech {
    font-weight: 700;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
  }

  li div {
    font-weight: 400;
    font-size: 12px;
    color: #868e96;
  }

  li:hover,
  button:hover {
    background-color: rgba(52, 59, 65, 1);
  }

  button {
    /* width: auto; */
    margin-left: 15px;

    cursor: pointer;

    background-color: rgba(18, 18, 20, 1);
    color: #ffffff;

    border: none;
  }

  button svg {
    /* background-color: rgba(52, 59, 65, 1); */
  }

  /* a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
  } */
`;

export default Container;
