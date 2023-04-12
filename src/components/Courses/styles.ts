import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;

  gap: 3rem;

  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm}
    ${(p) => p.theme.spacing.lm} ${(p) => p.theme.spacing.lm};

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding: 0px ${(p) => p.theme.spacing.lm} 0px ${(p) => p.theme.spacing.lm};
  }
`;
