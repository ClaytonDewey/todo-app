import styled from 'styled-components';
import check from '../images/icon-check.svg';

export const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--very-dark-desaturated-blue);
  height: 4.8rem;
  padding: 0 2rem;

  &__list {
    background-color: var(--very-dark-desaturated-blue);
    border-radius: var(--radius);
    overflow: hidden;

    .todo {
      &:not(:last-child) {
        border-bottom: 1px solid var(--dark-grayish-blue);
      }
    }
  }

  &__add {
    margin-bottom: 1.6rem;
    border-radius: var(--radius);
  }

  input[type='checkbox'] {
    //
  }
`

export const StyledCheckbox = styled.label`
input[type='checkbox'] {
  display: grid;
  place-content: center;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  color: hsl(233, 14%, 35%);
  height: 2rem;
  width: 2rem;
  border: 1px solid hsl(233, 14%, 35%);
  border-radius: 100%;

  &::before {
    content: '';
    color: $light;
    height: 2rem;
    width: 2rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background: url(${check}) no-repeat 50% center,
      linear-gradient(-225deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) no-repeat;
    border-radius: 100%;
  }

  &:checked::before {
    transform: scale(1);
  }
}
`;
