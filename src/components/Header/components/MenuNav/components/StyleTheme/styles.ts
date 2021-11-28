import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.text};
  border-radius: 100%;
  cursor: pointer;

  align-items: center;
  display: flex;
  justify-content: center;

  height: 25px;
  width: 25px;
`;
