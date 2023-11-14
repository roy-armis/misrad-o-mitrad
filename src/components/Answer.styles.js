import styled from 'styled-components';

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({correct}) => correct ? '#cee0c8' : '#eecece'};
  `;

export const Description = styled.p`
  width: 60%;
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

export const ImageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding-block: 5px;

  img {
    width: 90%;
    height: auto;
  }
`;