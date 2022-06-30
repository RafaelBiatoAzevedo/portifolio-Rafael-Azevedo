import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: #444444;
  padding: 6rem 3rem;

  > div:last-child {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    justify-content: center;
    width: 40%;
    gap: 2rem;
  }

  > div:last-child > div {
    border-radius: 2rem;
    background-color: ${(p) => p.theme.colors.tertiary};
    padding: 0.8rem 1.6rem;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  gap: 4rem;
`;

export const WrapperTitle = styled.div`
  display: flex;
  gap: 2rem;

  > div {
    align-items: center;
    display: flex;
    gap: 1rem;
    font-size: 3.5rem;
  }
`;
