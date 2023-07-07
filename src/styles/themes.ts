import darkImg from '../images/bg-desktop-dark.jpg';
import lightImg from '../images/bg-desktop-light.jpg';

export interface ThemeProps {
  backgroundImage: string;
  background: string;
  text: string;
}

export const darkTheme: ThemeProps = {
  backgroundImage: darkImg,
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
};

export const lightTheme: ThemeProps = {
  backgroundImage: lightImg,
  background: 'var(--light-background)',
  text: 'var(--light-text)',
};
