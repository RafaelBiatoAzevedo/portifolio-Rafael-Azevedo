import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 2px;

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
