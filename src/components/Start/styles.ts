import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: stretch;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  display: flex;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm};
  margin-top: ${(p) => p.theme.spacing.xxl};
  min-height: 50rem;

  gap: 3rem;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    margin-top: ${(p) => p.theme.spacing.md};
    padding: ${(p) => p.theme.spacing.xl} ${(p) => p.theme.spacing.sm};
  }
`;

export const WrapperText = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  gap: 4rem;
`;

export const WrapperImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  > img {
    border-radius: 100%;
    width: 22rem;
  }

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    > img {
      width: 15rem;
    }
  }
`;
