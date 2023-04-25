import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
  border-radius: 1rem;
  min-height: 34rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  padding: ${(p) => p.theme.spacing.lg} 0px;

  width: 70%;

  gap: 2rem;

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    min-height: 38rem;
  }

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    min-height: 42rem;
  }

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    min-height: 50rem;
  }
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;

  padding: 5px;
`;

export const WrapperImage = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 26%;
  height: 26%;
`;

export const WrapperContent = styled.div`
  align-items: flex-start;
  justify-content: space-evenly;
  display: flex;
  flex: 1;
`;

export const WrapperLinks = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WrapperTechonologies = styled.div`
  align-items: center;
  display: flex;

  padding: 4px 8px;
  gap: 1.5rem;
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

export const Image = styled.img`
  border-radius: 4px;
  resize: contain;
`;
