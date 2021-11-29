import styled from 'styled-components';

export const Wrapper = styled.a`
  align-items: center;
  border: solid 1px transparent;
  border-radius: 4px;
  display: flex;
  cursor: pointer;
  text-decoration: none;

  padding: 5px;
  gap: 10px;

  &:hover {
    border: solid 1px ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
