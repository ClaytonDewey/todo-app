import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodo } from '../context';

export const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return (
      <div className="todo__list">
        <div className="todo todo__empty">
          <h2>
            You have nothing to do!
          </h2>
        </div>
      </div>
    )
  }
  return (
    <div className='todo__list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};
