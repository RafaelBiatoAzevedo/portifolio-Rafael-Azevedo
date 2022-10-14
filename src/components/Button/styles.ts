import styled from 'styled-components';

type TWrapperProps = {
  backgroundcolor: string;
  isHoverBackgroundColor: string;
  borderRadius: string;
  width: string;
  height: string;
  paddingX: string;
  paddingY: string;
};

export const Wrapper = styled.button<TWrapperProps>`
  align-items: center;
  justify-content: center;
  border: none;

  background-color: ${(p) => p.backgroundcolor};
  border-radius: ${(p) => p.borderRadius};
  cursor: pointer;

  width: ${(p) => p.width};
  height: ${(p) => p.height};

  padding: ${(p) => p.paddingY} ${(p) => p.paddingX};

  &:hover {
    background-color: ${(p) => p.isHoverBackgroundColor};
  }

  transition: background-color 0.8s;
`;
