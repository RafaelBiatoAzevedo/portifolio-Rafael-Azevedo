import styled from 'styled-components';

export const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: ${(p) => p.theme.colors.tertiary} solid 1px;
  background-color: ${(p) => p.theme.colors.primary};
  gap: 20px;
  padding: 3rem 30px;
  text-align: center;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    padding: 3rem 10px;
  }
`;

export const WrapperTop = styled.div`
  display: flex;

  gap: 20px;
`;
