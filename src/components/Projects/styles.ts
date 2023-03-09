import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;

  min-height: 42rem;

  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm}
    ${(p) => p.theme.spacing.lm} ${(p) => p.theme.spacing.lm};

  gap: 1rem;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 10px;
  }
`;
