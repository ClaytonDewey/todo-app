import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children: JSX.Element
};

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;

  h1 {
    color: var(--dark-text);
  }
`;

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <HeaderStyled>
      <h1>todo</h1>
      {children}
    </HeaderStyled>
  );
};
export default Header;
