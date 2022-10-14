import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundTopMenu};
  display: flex;
  justify-content: space-between;
  padding: ${(p) => p.theme.spacing.lm};

  position: fixed;
  width: 100%;
`;

export const WrapperNavs = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    display: none;
  }
`;
