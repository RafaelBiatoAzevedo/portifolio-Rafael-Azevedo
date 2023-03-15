import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  align-items: center;
  display: none;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    display: flex;
  }
`;

type TIcon = {
  color: string;
  size: string;
  isButton?: boolean;
  isActive?: boolean;
};

export const Icon = styled.div<TIcon>`
  display: flex;
  cursor: pointer;
  font-size: ${(p) => p.size};
  color: ${(p) => p.color};
  border-radius: 2px;
  border: 2px solid transparent;

  &:hover {
    ${(p) =>
      p.isButton &&
      css`
        border-radius: 2px;
        border: 2px solid ${() => p.theme.colors.secondary};
      `}
  }

  ${(p) =>
    p.isActive &&
    css`
      border-radius: 2px;
      border: 2px solid ${() => p.theme.colors.secondary};
    `}
`;

type TWrapperDropDown = {
  isVisible?: boolean;
};

export const WrapperDropDown = styled.div<TWrapperDropDown>`
  position: absolute;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.secondary};
  visibility: hidden;
  opacity: 0;

  transition: visibility 0.3s, opacity 0.3s;

  top: 100%;
  z-index: 2;

  ${(p) =>
    p.isVisible &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const Option = styled.div`
  padding: 10px 10px 10px 5px;

  &:hover {
    background-color: ${(p) => p.theme.colors.tertiary};
  }
`;
