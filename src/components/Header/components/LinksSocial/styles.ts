import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: ${(p) => p.theme.resolutions.medium}) {
    gap: 15px;
  }
`;

export const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
`;
