import styled from 'styled-components';
import Icon from '../Icon';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const ModalContainer = styled.div`
  background-color: #000;
  border-radius: 0;
  width: 100%;
  height: 100vh;
  max-width: 400px;
  padding: 24px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    min-width: 600px;
    height: auto;
    border-radius: 24px;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const CloseIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;
