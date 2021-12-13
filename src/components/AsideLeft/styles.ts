import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 24%;

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    width: 26%;
  }

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    width: auto;
  }
`;

export const WrapperResponsive = styled.div`
  display: none;
  flex-direction: column;

  gap: 20px;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    display: flex;
  }
`;

export const ButtonShow = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;

  padding: 20px 6px;
`;

type TWrapperShow = {
  size: string;
  isShow: boolean;
};

export const WrapperShow = styled.div<TWrapperShow>`
  position: absolute;
  background-color: ${(p) => p.theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 0px;
  white-space: nowrap;

  ${(p) =>
    p.isShow &&
    css`
      width: ${() => p.size};
      padding-left: 6px;
    `}

  transition: width 0.7s, padding-left 0.7s;

  top: 0px;
  bottom: 0px;
  left: 100%;
`;

export const WrapperSkills = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;

  gap: 5px;
  width: 100%;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    display: none;
  }
`;

export const WrapperTitle = styled.div`
  background-color: ${(p) => p.theme.colors.tertiary};
  display: flex;
  justify-content: center;
  padding: 5px;

  transform: skew(-20deg);
`;

export const WrapperContent = styled.div`
  border-left: solid 2px ${(p) => p.theme.colors.tertiary};
  display: flex;
  padding: 5px 10px;
`;

export const Icon = styled.div`
  color: ${(p) => p.theme.colors.primary};
  font-size: 3rem;
`;
