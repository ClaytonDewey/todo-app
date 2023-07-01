import AddTodo from './AddTodo';
import Header from './Header';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';

function App() {
  return (
    <div className='container'>
      <Header />
      <AddTodo />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
