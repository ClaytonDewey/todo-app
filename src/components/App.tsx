import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

function App() {
  return (
    <div className='container'>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
