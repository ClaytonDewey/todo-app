import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    &.footer-todo {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: hsl(235, 24%, 19%);
    height: 4.8rem;
    border-radius: var(--radius);
    margin-top: 1.6rem;
  }

`

type TodoFooterProps = {};

const TodoFooter: React.FC<TodoFooterProps> = () => {
  return (
    <StyledFooter className='footer-todo'>
      <Button className='btn btn-text active'>All</Button>
      <Button className='btn btn-text'>Active</Button>
      <Button className='btn btn-text'>Completed</Button>
    </StyledFooter>
  );
};
export default TodoFooter;
