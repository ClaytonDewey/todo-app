import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    // Light colors
    --light-5: hsl(235, 19%, 35%);
    --light-4: hsl(236, 9%, 61%);
    --light-3: hsl(233, 11%, 84%);
    --light-2: hsl(236, 33%, 92%);
    --light-1: hsl(0, 0%, 98%);

    // Dark colors
    --dark-6: hsl(354, 80%, 10%);
    --dark-5: hsl(235, 21%, 11%);
    --dark-4: hsl(235, 24%, 19%);
    --dark-3: hsl(237, 14%, 26%);
    --dark-2: hsl(233, 14%, 35%);
    --dark-1: hsl(234, 39%, 85%);

    --primary-color: hsl(220, 98%, 61%);

    // Gradient
    --gradient: linear-gradient(-225deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
      no-repeat;

    // Borders
    --radius: 4px;

    // Transition timing
    --transition: 200ms ease-in-out;

    // Font family
    --ff-sans: 'Josefin Sans';
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
    font-family: var(--ff-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    background-image: 
    url(${({ theme }: GlobalThemeProps) => theme.backgroundImage});
    font-size: 1.8rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
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
