import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.tertiary};
  border-radius: 20px;

  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 4px 2px;

  height: 25px;
  width: 50px;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    height: 20px;
    width: 40px;
  }
`;

type TButton = {
  isOrder: boolean;
};

export const Button = styled.button<TButton>`
  background-color: ${(p) => p.theme.colors.secondary};
  border-radius: 100%;
  cursor: pointer;

  align-items: center;
  display: flex;
  justify-content: center;

  height: 23px;
  width: 23px;

  ${(p) =>
    p.isOrder &&
    css`
      order: 1;
    `}

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    height: 20px;
    width: 20px;
  }
`;

export const WrapperIcon = styled.div`
  background-color: transparent;
  border-radius: 100%;
  cursor: pointer;

  align-items: center;
  display: flex;
  justify-content: center;

  height: 23px;
  width: 23px;
`;
