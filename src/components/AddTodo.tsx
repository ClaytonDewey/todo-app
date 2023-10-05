import React, { useEffect, useRef, useState } from 'react';
// import { toast } from 'react-hot-toast';
import { useTodo } from '../context';
import { Input } from './Input';

export const AddTodo = () => {
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
      // toast.success('Todo added successfylly!');
    } else {
      // toast.error('Todo field cannot be empty!')
    }
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className='todo todo__add'>
        <label htmlFor='todo' className='sr-only'>
          New Todo
        </label>
        <Input
          ref={inputRef}
          type='text'
          id='todo'
          name='todo'
          placeholder='Create a new todo...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <button>
          Submit
        </button> */}
      </div>
    </form>
  );
};
