import styled from 'styled-components';

export const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: ${(p) => p.theme.colors.tertiary} solid 1px;
  background-color: ${(p) => p.theme.colors.primary};
  gap: 2rem;
  padding: ${(p) => p.theme.spacing.xxl};
  text-align: center;

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    padding: ${(p) => p.theme.spacing.xl};
  }

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    padding: ${(p) => p.theme.spacing.lg};
  }

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding: ${(p) => p.theme.spacing.lm};
  }

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: ${(p) => p.theme.spacing.md};
  }
`;

export const WrapperTop = styled.div`
  display: flex;

  gap: 2rem;
`;
