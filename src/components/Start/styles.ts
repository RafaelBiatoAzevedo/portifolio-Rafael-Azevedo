import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: stretch;
  background-color: #0e0e0e;
  display: flex;
  justify-content: center;
  padding: 6rem 3rem;
  padding-top: 10rem;

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
    width: 24rem;
  }
`;
