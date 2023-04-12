import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;

  min-height: 42rem;

  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm}
    ${(p) => p.theme.spacing.lm} ${(p) => p.theme.spacing.lm};

  gap: 3rem;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding: ${(p) => p.theme.spacing.xl} ${(p) => p.theme.spacing.lm};
  }
`;
