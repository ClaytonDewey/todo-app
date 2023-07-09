import darkImg from '../images/bg-desktop-dark.jpg';
import darkImgSm from '../images/bg-mobile-dark.jpg';
import lightImg from '../images/bg-desktop-light.jpg';
import lightImgSm from '../images/bg-mobile-light.jpg';

export interface ThemeProps {
  backgroundImage: string;
  backgroundImageSm: string;
  background: string;
  text: string;
}

export const darkTheme: ThemeProps = {
  backgroundImage: darkImg,
  backgroundImageSm: darkImgSm,
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
};

export const lightTheme: ThemeProps = {
  backgroundImage: lightImg,
  backgroundImageSm: lightImgSm,
  background: 'var(--light-background)',
  text: 'var(--light-text)',
};
