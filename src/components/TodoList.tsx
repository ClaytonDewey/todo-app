import React from 'react';
import Todo from './Todo';

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div className='todo__list'>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};
export default TodoList;
