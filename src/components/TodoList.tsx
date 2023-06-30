import React from 'react';
import Todo from './Todo';

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </>
  );
};
export default TodoList;
