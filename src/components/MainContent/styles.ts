import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const WrapperTitle = styled.div`
  display: flex;
  padding: 0px 0 5px 0;
  gap: 10px;
`;

export const HrDivisor = styled.hr`
  border: none;
  background-color: ${(p) => p.theme.colors.secondary};
  height: 1px;
  width: 100%;
`;
