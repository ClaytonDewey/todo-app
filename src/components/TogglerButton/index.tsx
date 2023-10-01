import { IconMoon, IconSun } from '../icons';

import * as S from './styles';

interface ThemeTogglerProps {
  themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
  return (
    <S.Container>
      <S.Icons onClick={themeToggler} className='slider round'>
        {window.localStorage.getItem('theme') !== 'light' ? (
          <>
            <IconSun />
            <span className='sr-only'>Set light mode</span>
          </>
        ) : (
          <>
            <IconMoon />
            <span className='sr-only'>Set dark mode</span>
          </>
        )}
      </S.Icons>
    </S.Container>
  );
}

export default TogglerButton;
