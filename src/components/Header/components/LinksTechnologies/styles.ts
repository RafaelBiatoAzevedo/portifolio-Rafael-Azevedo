import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 20px;

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    gap: 10px;
  }
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;

  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
