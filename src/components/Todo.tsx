import React from 'react';
import Button from './Button';
import cross from '../images/icon-cross.svg';
import styled from 'styled-components';
import check from '../images/icon-check.svg';

type TodoProps = {};

const StyledCheckbox = styled.label`
  input[type='checkbox'] {
    display: grid;
    place-content: center;
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    margin: 0;
    font: inherit;
    color: hsl(233, 14%, 35%);
    height: 2rem;
    width: 2rem;
    border: 1px solid hsl(233, 14%, 35%);
    border-radius: 100%;

    &::before {
      content: '';
      color: $light;
      height: 2rem;
      width: 2rem;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background: url(${check}) no-repeat 50% center,
        linear-gradient(-225deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) no-repeat;
      border-radius: 100%;
    }

    &:checked::before {
      transform: scale(1);
    }
  }
`;

const Todo: React.FC<TodoProps> = () => {
  return (
    <div className='todo'>
      <StyledCheckbox htmlFor=''>
        <input type='checkbox' name='' id='' />
        <span className='sr-only'>Toggle Status</span>
      </StyledCheckbox>
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
