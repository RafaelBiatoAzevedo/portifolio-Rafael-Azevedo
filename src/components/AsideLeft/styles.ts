import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;

  gap: 5px;

  width: 24%;
`;

export const WrapperTitle = styled.div`
  background-color: ${(p) => p.theme.colors.tertiary};
  display: flex;
  justify-content: center;
  padding: 5px;

  transform: skew(-20deg); /* Padrão */
`;

export const WrapperContent = styled.div`
  border-left: solid 2px ${(p) => p.theme.colors.tertiary};
  display: flex;
  padding: 5px 10px;
`;
