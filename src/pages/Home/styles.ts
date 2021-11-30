import styled from 'styled-components';

export const Body = styled.body`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  background-color: ${(p) => p.theme.colors.primary};

  gap: 40px;
  padding: 10px 30px;
  width: 100%;
`;
