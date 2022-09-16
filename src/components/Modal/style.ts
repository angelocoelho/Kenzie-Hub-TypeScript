import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);

  .modal {
    width: 300px;
    height: 270px;

    display: flex;
    flex-direction: column;

    color: #ffffff;
    background-color: #212529;

    border: 1px solid #212529;
    border-radius: 4px;
  }

  .titles {
    width: 278px;
    height: 40px;
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #343b41;

    border: 1px solid #212529;
    border-radius: 4px 4px 0 0;
  }

  .titles h4 {
    font-weight: 700;
    font-size: 11px;
  }

  .titles button {
    background-color: rgba(52, 59, 65, 1);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
  }

  label {
    font-weight: 400;
    font-size: 10px;
    margin: 11px 230px -10px 0;

    color: rgba(248, 249, 250, 1);

    align-items: flex-start;
  }

  .technology {
    margin: 20px 165px -10px 0;
  }

  input {
    width: 235px;
    height: 35px;
    padding: 0 13px;

    border: 1px solid rgba(248, 249, 250, 1);
    border-radius: 3px;

    color: #ffffff;
    background-color: #343b41;

    font-weight: 400;
    font-size: 13px;
  }

  select {
    width: 264px;
    height: 38px;
    padding: 0 13px;

    border: 1px solid rgba(248, 249, 250, 1);
    border-radius: 3px;

    color: #ffffff;
    background-color: #343b41;

    font-weight: 400;
    font-size: 13px;
  }

  .registration {
    width: 264px;
    height: 38px;
    padding: 0 13px;

    border: 1px solid rgba(255, 87, 127, 1);
    border-radius: 4px;

    background-color: rgba(255, 87, 127, 1);
    color: #ffffff;

    font-weight: 500;
    font-size: 12px;
  }

  .changes {
    display: flex;
    gap: 1.5rem;
  }

  .alteration {
    width: 160px;
    height: 38px;

    border: 1px solid rgba(89, 50, 63, 1);
    border-radius: 4px;

    background-color: rgba(89, 50, 63, 1);

    font-weight: 500;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
  }

  .delete {
    width: 78px;
    height: 38px;

    border: 1px solid rgba(134, 142, 150, 1);
    border-radius: 4px;

    background-color: rgba(134, 142, 150, 1);

    font-weight: 500;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
  }
`;

export default Container;
