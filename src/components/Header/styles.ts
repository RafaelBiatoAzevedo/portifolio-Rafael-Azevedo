import styled from 'styled-components';

export const WrapperHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.primary};
  padding: 10px;
  width: 100%;
`;

export const WrapperCenter = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const WrapperLogo = styled.div`
  flex: 1;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const WrapperPicture = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

type TImage = {
  isBorderRadius?: boolean;
};

export const Image = styled.img<TImage>`
  height: 100px;
  border-radius: ${(p) => (p.isBorderRadius ? '50%' : '0%')};
`;
