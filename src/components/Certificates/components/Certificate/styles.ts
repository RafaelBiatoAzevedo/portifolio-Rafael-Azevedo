import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  margin-bottom: 50px;

  padding: ${(p) => p.theme.spacing.lg} 0px;

  width: 75%;

  gap: 2rem;

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    min-height: 45rem;
  }

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    min-height: 51rem;
  }

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    min-height: 69rem;
  }
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;

  padding: 5px;
`;

export const WrapperLinks = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  gap: 2rem;
`;

export const WrapperImage = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  gap: 10px;
  width: 35%;
`;

export const WrapperContent = styled.div`
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex: 1;

  gap: 1rem;

  /* @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 10px;
    gap: 15px;
  } */
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Image = styled.img`
  border-radius: 4px;
  width: 100%;
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  text-align: center;

  border: 1px solid transparent;
  border-radius: 3px;
  padding: 6px;

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
