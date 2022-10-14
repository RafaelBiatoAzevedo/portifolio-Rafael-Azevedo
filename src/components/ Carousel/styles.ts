import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 0px ${(p) => p.theme.spacing.md};

  justify-content: space-between;
`;
