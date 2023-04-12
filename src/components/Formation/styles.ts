import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm};
  padding-bottom: 0px;

  gap: 1rem;

  width: 100%;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding: ${(p) => p.theme.spacing.xl} ${(p) => p.theme.spacing.lm};
  }
`;

export const WrapperTitle = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
`;

export const WrapperSubtitle = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const WrapperContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  gap: 1.5rem;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 35%;
`;
