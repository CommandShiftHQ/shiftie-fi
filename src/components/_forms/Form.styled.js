import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Heading = styled.h2`
  margin: 0 0 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  font-family: inherit;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: #aff514;
  color: #000;
  font-size: 18px;
  font-family: inherit;
  margin-top: 24px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const Links = styled.div`
  margin-top: 24px;
`;
