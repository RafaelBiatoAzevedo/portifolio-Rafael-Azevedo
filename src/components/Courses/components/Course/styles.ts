import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 31rem;

  padding: ${(p) => p.theme.spacing.lg};

  width: 48%;
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;

  padding: 5px;
`;

export const WrapperContent = styled.div`
  align-items: center;
  display: flex;
  flex: 1;

  padding: ${(p) => p.theme.spacing.sm};
  gap: 30px;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 10px;
    gap: 15px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

export const WrapperListSituation = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(p) => p.theme.spacing.sm};
  gap: 0.5rem;
`;

export const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: ${(p) => p.theme.spacing.sm};
`;

export const Image = styled.img`
  width: 20%;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    width: 25%;
  }
`;
