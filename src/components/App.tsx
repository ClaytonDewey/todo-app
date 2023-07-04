// import AddTodo from './AddTodo';
// import Header from './Header';
// import TodoFooter from './TodoFooter';
// import TodoList from './TodoList';

// function App() {
//   return (
//     <div className='container'>
//       <Header />
//       <AddTodo />
//       <TodoList />
//       <TodoFooter />
//     </div>
//   );
// }

// export default App;
import { ThemeProvider } from 'styled-components';
import TogglerButton from './TogglerButton';
import GlobalStyle from '../styles/global';
import ThemeContext from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../styles/themes';
import useThemeMode from '../hooks/useThemeMode';

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <header>
          <TogglerButton themeToggler={themeToggler} />
        </header>
        <h1>{theme}</h1>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
