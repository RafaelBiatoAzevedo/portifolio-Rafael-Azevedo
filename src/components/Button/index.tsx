import { FC } from 'react';

import { Wrapper } from './styles';

import { Text } from '../Text';

interface IButtonProps {
  title?: string | JSX.Element;
  icon?: JSX.Element;
  onClick: () => void;

  fontColor?: string;
  fontSize?: string;
  fontWeight?: 'regular' | 'medium' | 'bold';
  backgroundColor?: string;
  borderRadius?: string;

  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  title,
  icon,
  backgroundColor = 'transparent',
  borderRadius = '2px',
  fontColor = '#000',
  fontSize = '1rem',
  fontWeight = 'regular',
  width = 'auto',
  height = 'auto',
  paddingX = '2px',
  paddingY = '2px',
}) => {
  return (
    <Wrapper
      onClick={onClick}
      backgroundcolor={backgroundColor}
      width={width}
      height={height}
      paddingX={paddingX}
      paddingY={paddingY}
      borderRadius={borderRadius}
    >
      {!!title && (
        <Text
          color={fontColor}
          size={fontSize}
          weight={fontWeight}
          title={title}
        />
      )}
      {!!icon && icon}
    </Wrapper>
  );
};

Button.defaultProps = {
  title: undefined,
  icon: undefined,
  fontColor: undefined,
  fontSize: undefined,
  fontWeight: undefined,
  borderRadius: '2px',
  backgroundColor: 'transparent',
  width: 'auto',
  height: 'auto',
  paddingX: '2px',
  paddingY: '2px',
};
