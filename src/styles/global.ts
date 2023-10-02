import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    --primary-color: hsl(220, 98%, 61%);
    --light: hsl(0, 0%, 98%);
    --very-dark-blue: hsl(235, 21%, 11%);
    --very-dark-desaturated-blue: hsl(235, 24%, 19%);
    --light-grayish-blue: hsl(234, 39%, 85%);
    --lighter-grayish-blue: hsl(236, 33%, 92%);
    --dark-grayish-blue: hsl(234, 11%, 52%);
    --darker-grayish-blue: hsl(233, 14%, 35%);
    --very-dark-grayish-blue: hsl(237, 14%, 26%);

    // Gradient
    --gradient: linear-gradient(-225deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
      no-repeat;

    // Borders
    --radius: 4px;

    //dark-mode
    --dark-background: hsl(235, 21%, 11%);
    --dark-text: hsl(0, 0%, 98%);

    //light-mode
    --light-background: hsl(0, 0%, 98%);
    --light-text: #2E0509;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    margin: 0;
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    background-image: url(${({ theme }: GlobalThemeProps) => theme.backgroundImage});
    font-size: 1.6rem;
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  .todo {
    background-color: ${({ theme }: GlobalThemeProps) => theme.inputBg};
    color: ${({ theme }: GlobalThemeProps) => theme.text}
  }

  input {
    color: ${({ theme }: GlobalThemeProps) => theme.text}
  }

`;

export default withTheme(globalStyle);
