import { ThemeProvider, styled } from 'styled-components';
import TogglerButton from './TogglerButton';
import GlobalStyle from '../styles/global';
import ThemeContext from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../styles/themes';
import useThemeMode from '../hooks/useThemeMode';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 4.8rem auto 2rem;
  padding: 0 2.3rem;

  @media screen and (min-width: 55.125em) {
    margin: 8rem auto 2rem;
  }
`

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <StyledContainer>
          <Header>
            <TogglerButton themeToggler={themeToggler} />
          </Header>
          <AddTodo />
          <TodoList />
          <TodoFooter />
        </StyledContainer>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
