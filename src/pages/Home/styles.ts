import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  background-color: ${(p) => p.theme.colors.primary};
  flex: 1;

  gap: 40px;
  padding: 10px 30px;
  width: 100%;

  @media (max-width: ${(p) => p.theme.resolutions.small}) {
    padding: 10px;
    gap: 10px;
  }
`;
