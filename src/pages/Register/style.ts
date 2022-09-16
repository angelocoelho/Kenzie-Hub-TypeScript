import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(33, 37, 41, 1);
  color: #ffffff;

  width: 85%;
  margin: 0 auto;

  h4 {
    font-weight: 700;
    font-size: 14px;

    color: rgba(248, 249, 250, 1);
  }

  span {
    font-weight: 400;
    font-size: 10px;

    color: rgba(134, 142, 150, 1);
  }

  form {
    width: 100%;
    height: 700px;

    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 400;
    font-size: 10px;
    margin: 5px 240px 7px 0;

    color: rgba(248, 249, 250, 1);

    align-items: flex-start;
  }

  input {
    width: 265px;
    height: 38px;
    padding-left: 12px;
    margin: 0 auto;

    border: 1px solid rgba(52, 59, 65, 1);
    border-radius: 3px;

    background: #343b41;
    color: #ffffff;
  }

  .labelModule {
    margin: 5px 190px 7px 0;
  }

  select {
    width: 281px;
    height: 38px;
    margin: 0 auto;

    border: 1px solid rgba(52, 59, 65, 1);
    border-radius: 3px;

    background: #343b41;

    color: #868e96;
  }

  button {
    width: 281px;
    height: 38px;
    margin: 1rem auto;

    border: 1px solid rgba(52, 59, 65, 1);
    border-radius: 3px;

    background: rgba(89, 50, 63, 1);

    color: #ffffff;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default Container;
