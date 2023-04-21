import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../_utils/Icon';

export const Text = styled.h3`
  color: #cccccc;
  font-size: 18px;
  font-weight: 300;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
`;

export const AddIcon = styled(Icon)`
  width: 40px;
  height: 40px;
  margin-bottom: 16px;

  circle,
  line {
    stroke: #333333;
  }
`;

export const Card = styled(Link)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.75;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px dashed #333333;
  text-decoration: none;
  transition: all 200ms ease-in;
  padding: 24px;
  border-radius: 4px;

  &:hover {
    border-color: #ffffff;

    ${Text} {
      color: #ffffff;
    }

    ${AddIcon} {
      circle,
      line {
        fill: #ffffff;
      }
    }
  }
`;
