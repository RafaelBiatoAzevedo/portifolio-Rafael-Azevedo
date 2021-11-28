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
  flex: 3;
`;

export const WrapperImage = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  height: 100px;
  border-radius: 50%;
`;
