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

export const WrapperImage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 25%;
`;

export const WrapperContent = styled.div`
  align-items: center;
  display: flex;

  padding: 20px;
  gap: 30px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  border: 1px solid transparent;
  border-radius: 3px;
  padding: 6px;

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
