import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: stretch;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  display: flex;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm};
  margin-top: ${(p) => p.theme.spacing.xxl};

  gap: 3rem;
`;

export const WrapperText = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  gap: 4rem;
`;

export const WrapperImage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > img {
    border-radius: 100%;
    width: 22rem;
  }
`;
