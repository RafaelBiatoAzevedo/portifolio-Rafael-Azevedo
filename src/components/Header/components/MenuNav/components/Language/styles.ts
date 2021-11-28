import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  gap: 10px;
`;

type TImage = {
  isActive: boolean;
};

export const Image = styled.img<TImage>`
  height: 20px;
  width: 35px;

  cursor: pointer;
  opacity: ${(p) => (p.isActive ? '1' : '0.5')};

  &:hover {
    border: solid 1px ${(p) => p.theme.colors.secondary};
  }
`;
