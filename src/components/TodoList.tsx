import { TodoItem } from './TodoItem';
import { useTodo } from '../context';
import Button from './Button';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';

const StyledFooter = styled.footer`
  &.todo__footer {
    display: grid;
    grid-template-columns: 1fr 45% 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    align-items: center;
    text-align: center;
    background-color: hsl(235, 24%, 19%);
    height: 4.8rem;
    border-radius: var(--radius);
    font-size: 1.2rem;

    button {
      font-size: 1.1rem;
    }
    /* margin-top: 1.6rem; */
  }
`;

export const TodoList = () => {
  const { todos } = useTodo();

  const showAllTodos = () => {
    toast.success('This will display all todos');
  };

  const showActiveTodos = () => {
    toast.success('This will dispay active todos');
  };

  const showCompletedTodos = () => {
    toast.success('This will show completed todos');
  };

  const deleteCompletedTodos = () => {
    toast.success('This will delete completed todos');
  };

  if (!todos.length) {
    return (
      <div className='todo__list'>
        <div className='todo todo__empty'>
          <h2>You have nothing to do!</h2>
        </div>
      </div>
    );
  }
  return (
    <div className='todo__list'>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      <StyledFooter className='todo todo__footer'>
        <span className='todo__count'>5 items left</span>
        <div className='todo__toggle-container'>
          <Button
            className='btn btn-text active'
            onClick={() => showAllTodos()}>
            All
          </Button>
          <Button className='btn btn-text' onClick={() => showActiveTodos()}>
            Active
          </Button>
          <Button className='btn btn-text' onClick={() => showCompletedTodos()}>
            Completed
          </Button>
        </div>
        <Button className='btn btn-text' onClick={() => deleteCompletedTodos()}>
          Clear Completed
        </Button>
      </StyledFooter>
    </div>
  );
};
