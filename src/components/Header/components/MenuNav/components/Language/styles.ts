import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  gap: 10px;

  @media (max-width: ${(p) => p.theme.resolutions.celphone}) {
    gap: 5px;
  }
`;

type TImage = {
  isActive: boolean;
};

export const Image = styled.img<TImage>`
  height: 22px;
  width: 37px;

  cursor: pointer;
  opacity: ${(p) => (p.isActive ? '1' : '0.4')};
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 2px;

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
