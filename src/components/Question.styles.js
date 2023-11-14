import styled from 'styled-components';

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 300px;
  }
`;
