import React from 'react';

type HeaderProps = {
  children: JSX.Element
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className='header'>
      <h1>todo</h1>
      {children}
    </header>
  );
};
export default Header;
