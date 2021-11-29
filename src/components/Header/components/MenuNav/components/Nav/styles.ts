import styled, { css } from 'styled-components';

type TWrapper = {
  isBorderBottom: boolean;
};

export const Wrapper = styled.div<TWrapper>`
  margin: 0px 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;

  &:hover {
    background-color: ${(p) => p.theme.colors.secondary};
  }

  ${(p) =>
    p.isBorderBottom &&
    css`
      border-bottom: solid 1px ${() => p.theme.colors.tertiary};
    `}

  transition: background-color 0.8s;
`;
