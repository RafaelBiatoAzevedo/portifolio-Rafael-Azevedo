import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    gap: 0.5rem;
  }
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  padding: 0.4rem;

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
