import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 24px 24px 0;
  display: flex;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 48px 48px 0;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: auto;
  vertical-align: middle;
  margin-right: 24px;
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const SignOut = styled.button`
  flex: 1;
  text-align: right;
  background: transparent;
  color: #fff;
  appearance: none;
  border: 0;
  font-family: inherit;
  font-size: 16px;
  width: 150px;
`;
