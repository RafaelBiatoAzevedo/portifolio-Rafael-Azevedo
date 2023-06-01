import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    flex-wrap: wrap;
  }
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  border: 1px solid;
  border-radius: 2px;
  padding: 4px;

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
