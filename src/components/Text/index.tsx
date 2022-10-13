import { FC } from 'react';

import { TextStyle } from './styles';

type TText = {
  title?: string | JSX.Element | undefined;
  color?: string;
  size?: string;
  padddingY?: string;
  paddingX?: string;
  weight?: string;
  mLeft?: string;
};

export const Text: FC<TText> = ({
  children,
  title,
  color = '#000',
  size = '1rem',
  padddingY = '0px',
  paddingX = 'opx',
  weight = '400',
  mLeft = '0px',
}): JSX.Element => {
  return (
    <TextStyle
      color={color}
      size={size}
      paddingY={padddingY}
      paddingX={paddingX}
      weight={weight}
      mLeft={mLeft}
    >
      {!!title && title}
      {children}
    </TextStyle>
  );
};

Text.defaultProps = {
  title: undefined,
  color: undefined,
  size: undefined,
  padddingY: undefined,
  paddingX: undefined,
  weight: undefined,
  mLeft: undefined,
};
