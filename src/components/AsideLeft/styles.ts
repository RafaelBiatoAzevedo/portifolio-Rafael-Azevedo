import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;

  gap: 5px;

  width: 24%;

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    width: 26%;
  }

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
