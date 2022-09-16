import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(33, 37, 41, 1);

  h1 {
    color: rgba(255, 87, 127, 1);

    font-weight: 700;
    font-size: 30px;
  }

  div {
    width: 296px;
    height: 402px;

    margin: 0 auto;
  }

  form {
    width: 100%;
    height: 235px;
    padding: 34px, 18px, 34px, 18px;

    border: 1px solid rgba(33, 37, 41, 1);
    border-radius: 3px;

    box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px
      rgba(0, 0, 0, 0.25);
  }
  form h4 {
    margin: 0;

    font-weight: 700;
    font-size: 17px;

    color: rgba(248, 249, 250, 1);
  }

  form label {
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 2px;
    margin-right: 262px;

    color: rgba(248, 249, 250, 1);

    align-items: flex-start;
  }

  form input {
    width: 264px;
    height: 38px;
    padding: 0 13px;

    border: 1px solid rgba(248, 249, 250, 1);
    border-radius: 3px;

    background-color: rgba(52, 59, 65, 1);

    cursor: pointer;
  }

  span {
    font-weight: 400;
    font-size: 10px;
    display: block;

    margin-bottom: 2px;

    color: rgba(248, 249, 250, 1);
  }

  form button {
    width: 291px;
    height: 38px;
    padding: 0 22px;
    margin-top: 19px;

    border: 1px solid rgba(255, 87, 127, 1);
    border-radius: 4px;

    background-color: rgba(255, 87, 127, 1);
    color: rgba(255, 255, 255, 1);

    cursor: pointer;
  }

  form button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  p {
    font-weight: 600;
    font-size: 9px;

    color: rgba(134, 142, 150, 1);
  }

  .register {
    display: block;
    width: 250px;
    height: 38px;
    padding: 0 22px;
    margin-top: 19px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(134, 142, 150, 1);
    border-radius: 4px;

    background-color: rgba(134, 142, 150, 1);
    color: rgba(255, 255, 255, 1);

    cursor: pointer;

    text-decoration: none;
  }
`;

export default Container;
