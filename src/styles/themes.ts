import darkImg from '../images/bg-desktop-dark.jpg';
import lightImg from '../images/bg-desktop-light.jpg';

export interface ThemeProps {
  backgroundImage: string;
  background: string;
  inputBg: string;
  text: string;
}

export const darkTheme: ThemeProps = {
  backgroundImage: darkImg,
  background: 'var(--dark-background)',
  inputBg: 'var(--very-dark-desaturated-blue)',
  text: 'var(--dark-text)',
};

export const lightTheme: ThemeProps = {
  backgroundImage: lightImg,
  background: 'var(--light-background)',
  inputBg: 'var(--lighter-grayish-blue)',
  text: 'var(--light-text)',
};
