import styled from 'styled-components';

export const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: ${(p) => p.theme.colors.tertiary} solid 1px;
  background-color: ${(p) => p.theme.colors.primary};
  gap: 20px;
  padding: 3rem 0;
  text-align: center;
`;
export const WrapperTop = styled.div`
  display: flex;

  gap: 20px;
`;
