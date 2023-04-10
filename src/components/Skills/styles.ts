import styled from 'styled-components';

type TWrapperProps = {
  backgroudColor: string;
  isSoftSkills: boolean;
};

export const Wrapper = styled.div<TWrapperProps>`
  align-items: center;
  display: flex;
  background-color: ${(p) => p.backgroudColor};
  padding: ${(p) => p.theme.spacing.xxl} ${(p) => p.theme.spacing.lm};
  min-height: 42rem;

  gap: 11rem;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding: ${(p) => p.theme.spacing.xl} ${(p) => p.theme.spacing.sm};
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

type TLinkProps = {
  textColor: string;
};

export const Link = styled.a<TLinkProps>`
  text-decoration: none;
  color: ${(p) => p.textColor};
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 1rem;
`;

type TTextMessageProps = {
  textColor: string;
};

export const TextMessage = styled.p<TTextMessageProps>`
  color: ${(p) => p.textColor};
  font-size: 2rem;
`;

export const GridTechs = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr, 1fr;
  width: 70%;
  border: solid red;
`;

export const WrapperSoftSkills = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  justify-content: center;
  width: 70%;
  gap: 2.5rem;

  > div {
    text-align: center;
    border-radius: 2rem;
    background-color: ${(p) => p.theme.colors.tertiary};
    padding: 0.8rem 1.6rem;
  }
`;
