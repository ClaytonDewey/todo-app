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
          </>
        ) : (
          <>
            <IconMoon />
          </>
        )}
      </S.Icons>
    </S.Container>
  );
}

export default TogglerButton;
