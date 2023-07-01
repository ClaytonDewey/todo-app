import React from 'react';

type AddTodoProps = {};

const AddTodo: React.FC<AddTodoProps> = () => {
  return (
    <div className='todo todo__add'>
      <label htmlFor='todo' className='sr-only'>
        New Todo
      </label>
      <input
        type='text'
        id='todo'
        name='todo'
        placeholder='Create a new todo...'
      />
    </div>
  );
};
export default AddTodo;
