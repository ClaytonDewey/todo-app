import type { Todo } from '../context';
import { useEffect, useRef, useState } from 'react';
import { useTodo } from '../context';
import { Input } from './Input';
// import { toast } from 'react-hot-toast';
import Button from './Button';
import cross from '../images/icon-cross.svg';
import styled from 'styled-components';
import check from '../images/icon-check.svg';

const StyledStatusButton = styled.button`
  display: grid;
  place-content: center;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  margin: 0;
  margin-left: 2rem;
  font: inherit;
  color: hsl(233, 14%, 35%);
  height: 2rem;
  width: 2rem;
  border: 1px solid hsl(233, 14%, 35%);
  border-radius: 100%;

  &.done {
    content: '';
    color: $light;
    height: 2rem;
    width: 2rem;
    transition: 120ms transform ease-in-out;
    background:
      url(${check}) no-repeat 50% center,
      linear-gradient(-225deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
        no-repeat;
    border-radius: 100%;
  }
`;

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [editingTodoText, setEditingTodoText] = useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const { deleteTodo, editTodo, updateTodoStatus } = useTodo();

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

  const handleUpdate = (todoId: string) => {
    if (editingTodoText.trim() !== '') {
      editTodo(todoId, editingTodoText);
      setEditingTodoId(null);
      setEditingTodoText('');
      // toast.success('Todo updated successfully!');
    } else {
      // toast.error('Todo field cannot be empty!');
    }
  };

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
    // toast.success('Todo deleted successfully!');
  };

  const handleStatusUpdate = (todoId: string) => {
    updateTodoStatus(todoId);
    // toast.success('Todo status updated successfully!');
  };

  return (
    <>
      {editingTodoId === todo.id ? (
        <>
          <div className='todo'>
            <StyledStatusButton
              onClick={() => handleStatusUpdate(todo.id)}
              className={`todo__toggle ${
                todo.status === 'undone' ? '' : 'done'
              }`}>
              {todo.status === 'undone' ? (
                <span className='sr-only'>mark completed</span>
              ) : (
                <span className='sr-only'>mark undone</span>
              )}
            </StyledStatusButton>
            <form onSubmit={() => handleUpdate(todo.id)}>
              <label htmlFor='todo' className='sr-only'>
                Edit Todo
              </label>
              <Input
                ref={editInputRef}
                type='text'
                value={editingTodoText}
                onChange={(e) => setEditingTodoText(e.target.value)}
              />
            </form>
            <div></div>
          </div>
        </>
      ) : (
        <div className='todo'>
          <StyledStatusButton
            onClick={() => handleStatusUpdate(todo.id)}
            className={`todo__toggle ${
              todo.status === 'undone' ? '' : 'done'
            }`}>
            {todo.status === 'undone' ? (
              <span className='sr-only'>mark completed</span>
            ) : (
              <span className='sr-only'>mark undone</span>
            )}
          </StyledStatusButton>
          <div>
            <p
              onClick={() => handleEdit(todo.id, todo.text)}
              style={{
                textDecoration:
                  todo.status === 'completed' ? 'line-through' : 'none',
                opacity: todo.status === 'completed' ? 0.5 : 1,
              }}>
              {todo.text}
            </p>
            {/* <button onClick={() => handleEdit(todo.id, todo.text)}>
              <FaRegEdit />
              Edit
            </button> */}
          </div>
          <Button onClick={() => handleDelete(todo.id)} className='btn btn-del'>
            <img role='presentation' alt='delete' src={cross} />
            <span className='sr-only'>Delete Todo</span>
          </Button>
        </div>
      )}
    </>
  );
};
