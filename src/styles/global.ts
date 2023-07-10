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

  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // This defines what 1rem is.
  font-size: 62.5%; // 1rem = 10px;
  font-style: normal;
  font-weight: normal;
}

html,
body {
  margin: 0px auto;
  width: 100%;
  box-sizing: border-box;
}  

.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

body  {
  position: relative;
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
    background-image: url(${({ theme }: GlobalThemeProps) => theme.backgroundImageSm});

    @media screen and (min-width: 55.125em) {
      background-image: url(${({ theme }: GlobalThemeProps) => theme.backgroundImage});
    }
  }

  h1 {
  text-transform: uppercase;
  font-size: 2.7rem;
  font-weight: 700;
  letter-spacing: 9.5px;

  @media screen and (min-width: 55.125em) {
    font-size: 4rem;
    letter-spacing: 6px;
  }
}
`;

export default withTheme(globalStyle);
