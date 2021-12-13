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

export const WrapperTechonologies = styled.div`
  align-items: center;
  display: flex;

  padding-left: 6px;
  gap: 10px;
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: center;

  gap: 8px;
  width: 25%;

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
  width: 100%;
`;
