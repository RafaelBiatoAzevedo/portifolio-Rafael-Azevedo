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

  gap: 10rem;

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    padding: ${(p) => p.theme.spacing.xl} ${(p) => p.theme.spacing.lm};
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
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 43%;
  gap: 1rem;
`;

export const WrapperSoftSkills = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  justify-content: flex-end;
  max-width: 40%;
  gap: 2rem;
`;

export const CartSoftSkill = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 24rem;
  height: 5rem;
  border-radius: 3rem;
  background-color: ${(p) => p.theme.colors.tertiary};

  @media (max-width: ${(p) => p.theme.resolutions.tablet}) {
    width: 28rem;
  }
`;
