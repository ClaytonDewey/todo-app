import React from 'react';
import Button from './Button';

type TodoFooterProps = {};

const TodoFooter: React.FC<TodoFooterProps> = () => {
  return (
    <footer className='footer-todo'>
      <Button className='btn btn-text active'>All</Button>
      <Button className='btn btn-text'>Active</Button>
      <Button className='btn btn-text'>Completed</Button>
    </footer>
  );
};
export default TodoFooter;
