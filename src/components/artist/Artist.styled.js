import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  transition: transform 250ms ease-in;
`;

export const Card = styled(Link)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.75;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: black;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: background-color 500ms ease-in;
  padding: 24px 24px 48px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    background-color: #333333;

    ${Image} {
      transform: scale(1.1);
    }
  }
`;

export const Name = styled.h3`
  color: #ffffff;
  font-size: 28px;
  font-weight: 300;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
`;

export const User = styled.div`
  font-size: 14px;
  color: #cccccc;
  text-shadow: rgba(0, 0, 0, 1) 1px 1px 10px;
  position: relative;
  z-index: 1;
`;
