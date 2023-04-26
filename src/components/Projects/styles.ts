import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;

  gap: 3rem;

  padding: ${(p) => p.theme.spacing.xxl};
`;
