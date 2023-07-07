import React from 'react';
import Button from './Button';
import cross from '../images/icon-cross.svg';

type TodoProps = {};

const Todo: React.FC<TodoProps> = () => {
  return (
    <div className='todo'>
      <label htmlFor='' className='form-control'>
        <input type='checkbox' name='' id='' />
        <span className='sr-only'>Toggle Status</span>
      </label>
      {/* <input type='text' placeholder='Feed the cat' /> */}
      <p>Feed the cat</p>
      <Button className='btn btn-del'>
        <img
          role='presentation'
          alt='delete'
          src={cross}
        />
      </Button>
    </div>
  );
};
export default Todo;
