import styled from 'styled-components';

export const WrapperHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.primary};
  padding: 10px 30px;

  gap: 10px;

  width: 100%;

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    padding: 10px;
  }
`;

export const WrapperCenter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const WrapperLogo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  border: solid red;

  gap: 10px;

  width: 24%;

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    width: 26%;
  }

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    width: auto;
  }

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    display: none;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20%;
  flex: 1;

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    padding-left: 10%;
  }

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding-left: 1%;
  }

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding-left: 0;
  }
`;

export const WrapperPicture = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

type TImage = {
  isBorderRadius?: boolean;
};

export const Image = styled.img<TImage>`
  height: 150px;
  border-radius: ${(p) => (p.isBorderRadius ? '50%' : '8px')};

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    height: 100px;
  }

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    height: 80px;
  }
`;
