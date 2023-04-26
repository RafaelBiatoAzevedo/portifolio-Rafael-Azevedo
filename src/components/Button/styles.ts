import styled from 'styled-components';

type TWrapperProps = {
  backgroundcolor: string;
  borderRadius: string;
  width: string;
  height: string;
  paddingX: string;
  paddingY: string;
};

export const Wrapper = styled.button<TWrapperProps>`
  align-items: center;
  justify-content: center;
  border: 1px solid ${(p) => p.backgroundcolor};

  background-color: ${(p) => p.backgroundcolor};
  border-radius: ${(p) => p.borderRadius};
  cursor: pointer;

  width: ${(p) => p.width};
  height: ${(p) => p.height};

  padding: ${(p) => p.paddingY} ${(p) => p.paddingX};

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
