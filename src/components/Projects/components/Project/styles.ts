import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  border-radius: 1rem;
  min-height: 33rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  padding: ${(p) => p.theme.spacing.lg} 0px;

  width: 60%;

  gap: 2rem;
  transition: height 0.8s;
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

  width: 26%;
  height: 26%;
`;

export const WrapperContent = styled.div`
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex: 1;

  gap: 2rem;
  /* 
  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 10px;
    gap: 15px;
  } */
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  flex-direction: column;
  text-decoration: none;
  text-align: center;

  gap: 8px;
  width: 35%;

  border: 1px solid transparent;
  border-radius: 4px;
  padding-bottom: 4px;

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
