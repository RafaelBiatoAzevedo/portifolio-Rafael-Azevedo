import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  gap: 5px;

  width: 24%;
`;

export const WrapperTitle = styled.div`
  background-color: ${(p) => p.theme.colors.secondary};
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const WrapperContent = styled.div`
  border-left: solid 2px ${(p) => p.theme.colors.tertiary};
  display: flex;
  padding: 5px 10px;
`;
