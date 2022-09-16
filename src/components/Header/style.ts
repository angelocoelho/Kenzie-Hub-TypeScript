import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: #ff577f;

    font-weight: 600;
    font-size: 20px;
  }

  button {
    width: 79px;
    height: 32px;

    border: 1px solid #212529;
    border-radius: 4px;

    font-weight: 600;
    font-size: 10px;
    color: #f8f9fa;

    align-items: center;

    background-color: #212529;

    cursor: pointer;
  }
`;

export default Container;
