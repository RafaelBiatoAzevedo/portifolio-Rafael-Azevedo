import styled from 'styled-components';

export const WrapperHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.primary};
  padding: 10px 30px;

  gap: 10px;

  width: 100%;
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

  gap: 10px;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20%;
  flex: 1;
`;

export const WrapperPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 10px;
`;

type TImage = {
  isBorderRadius?: boolean;
};

export const Image = styled.img<TImage>`
  height: 150px;
  border-radius: ${(p) => (p.isBorderRadius ? '50%' : '0%')};

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    height: 100px;
  }

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    height: 80px;
  }
`;
