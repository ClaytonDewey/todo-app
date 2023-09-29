import { ThemeProvider } from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import { AddTodo } from './components';
import Header from './components/Header';
import TodoFooter from './components/TodoFooter';
import { TodoList } from './components';

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div className='container'>
          <Header>
            <TogglerButton themeToggler={themeToggler} />
          </Header>
          <AddTodo />
          <TodoList />
          <TodoFooter />
        </div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;