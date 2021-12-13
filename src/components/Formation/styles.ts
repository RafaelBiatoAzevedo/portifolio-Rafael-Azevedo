import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0 20px 60px;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 10px;
  }
`;

export const WrapperFormation = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    width: 100%;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  padding: 5px;
`;

export const WrapperContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  padding: 20px;
  gap: 30px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 35%;
`;
