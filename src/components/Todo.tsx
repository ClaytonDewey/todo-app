import React from 'react';
import Button from './Button';
import cross from '../images/icon-cross.svg';
import * as S from './styles';

type TodoProps = {};


const Todo: React.FC<TodoProps> = () => {
  return (
    <S.StyledTodo>
      <S.StyledCheckbox>
        <input type='checkbox' name='' id='' />
        <span className='sr-only'>Toggle Status</span>
      </S.StyledCheckbox>
      {/* <input type='text' placeholder='Feed the cat' /> */}
      <p>Feed the cat</p>
      <Button className='btn btn-del'>
        <img
          role='presentation'
          alt='delete'
          src={cross}
        />
      </Button>
    </S.StyledTodo>
  );
};
export default Todo;
