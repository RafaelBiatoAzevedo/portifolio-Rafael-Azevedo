import styled from 'styled-components';

export const Wrapper = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.backgroundPrimary};
  text-decoration: none;
  border-radius: 0.4rem;
  border: 1px solid ${(p) => p.theme.colors.backgroundPrimary};
  text-align: center;

  width: 10rem;
  height: 9rem;

  gap: 1rem;
  padding: ${(p) => p.theme.spacing.md};

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.tertiary};
    -webkit-box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
    box-shadow: -1px 3px 8px 1px ${(p) => p.theme.colors.tertiary};
  }
`;
