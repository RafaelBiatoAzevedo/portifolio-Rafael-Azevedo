import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  gap: 10px;
`;

export const WrapperNavs = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    display: none;
  }
`;
