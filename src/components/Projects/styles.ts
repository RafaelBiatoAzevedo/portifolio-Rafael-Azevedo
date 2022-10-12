import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;

  gap: 3rem;

  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm};

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 10px;
  }
`;
