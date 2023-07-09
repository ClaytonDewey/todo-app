import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Icons = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  svg {
    color: ${({ theme }) => theme.text};
    z-index: 11;
  }
`;
