import { TodoItem } from './TodoItem';
import { useTodo } from '../context';
import Button from './Button';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
// import quotes from '../quotes.json';

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
  const [display, setDisplay] = useState<string>('all');
  const activeItemsCount = todos.filter((todo) => {
    return todo.status === 'undone';
  }).length;

  const deleteCompletedTodos = () => {
    toast('This will delete completed todos', { icon: '👋' });
  };

  // const [quote, setQuote] = useState({});

  // useEffect(() => {
  //   let randomIndex = Math.floor(Math.random() * quotes.length);
  //   setQuote(quotes[randomIndex]);
  //   console.log(quote);
  // }, [quote]);

  if (!todos.length) {
    return (
      <div className='todo__list'>
        <div className='todo todo__empty'>
          <h2>You have nothing to do!</h2>
          <blockquote>
            &ldquo;Wherever you are is the entry point.&rdquo; &mdash;{' '}
            <footer>Kabir</footer>
          </blockquote>
        </div>
      </div>
    );
  }
  return (
    <div className='todo__list'>
      {display === 'all' && (
        <>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </>
      )}
      {display === 'active' && (
        <>
          {todos
            .filter((todo) => todo.status === 'undone')
            .map((todo) => {
              return <TodoItem todo={todo} key={todo.id} />;
            })}
        </>
      )}
      {display === 'done' && (
        <>
          {todos
            .filter((todo) => todo.status === 'completed')
            .map((todo) => {
              return <TodoItem todo={todo} key={todo.id} />;
            })}
        </>
      )}

      <StyledFooter className='todo todo__footer'>
        <span className='todo__count'>{activeItemsCount} items left</span>
        <div className='todo__toggle-container'>
          <Button
            className={`btn btn-text ${display === 'all' ? 'active' : ''}`}
            onClick={() => setDisplay('all')}>
            All
          </Button>
          <Button
            className={`btn btn-text ${display === 'active' ? 'active' : ''}`}
            onClick={() => setDisplay('active')}>
            Active
          </Button>
          <Button
            className={`btn btn-text ${display === 'done' ? 'active' : ''}`}
            onClick={() => setDisplay('done')}>
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
