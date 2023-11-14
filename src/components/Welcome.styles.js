import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const Img = styled.div`
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 90%;
    height: auto;
  }
`;
