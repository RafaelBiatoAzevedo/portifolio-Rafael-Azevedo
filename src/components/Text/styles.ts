import styled from 'styled-components';

type TTextStyle = {
  color: string;
  size: string;
  paddingY: string;
  paddingX: string;
  weight: string;
  mLeft: string;
};

export const TextStyle = styled.p<TTextStyle>`
  display: flex;
  color: ${(p) => p.color};
  font-size: ${(p) => p.size};
  padding: ${(p) => p.paddingY} ${(p) => p.paddingX};
  font-weight: ${(p) => p.weight};
  margin-left: ${(p) => p.mLeft};
`;
