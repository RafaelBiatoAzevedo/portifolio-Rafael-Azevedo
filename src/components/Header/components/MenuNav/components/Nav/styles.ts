import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0px 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;

  &:hover {
    background-color: ${(p) => p.theme.colors.secondary};
  }

  transition: background-color 0.5s;
`;
