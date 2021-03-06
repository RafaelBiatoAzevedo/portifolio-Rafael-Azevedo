import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;

  padding: 5px;
`;

export const WrapperContent = styled.div`
  align-items: center;
  display: flex;

  padding: 20px;
  gap: 30px;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 10px;
    gap: 15px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 15%;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    width: 25%;
  }
`;
