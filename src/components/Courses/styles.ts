import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;

  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm}
    ${(p) => p.theme.spacing.lm} ${(p) => p.theme.spacing.lm};

  gap: 3rem;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding: ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.lm};
  }
`;
