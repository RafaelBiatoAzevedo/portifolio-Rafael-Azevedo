import { FC } from 'react';

import { Wrapper } from './styles';

import { Text } from '../Text';

interface IButtonProps {
  title?: string;
  icon?: JSX.Element;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;

  fontColor?: string;
  fontSize?: string;
  fontWeight?: 'regular' | 'medium' | 'bold';
  backgroundColor?: string;
  isHoverBackgroundColor?: string;
  borderRadius?: string;

  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  onMouseOver,
  onMouseOut,
  title,
  icon,
  backgroundColor = 'transparent',
  isHoverBackgroundColor = 'transparent',
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
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
      backgroundcolor={backgroundColor}
      isHoverBackgroundColor={isHoverBackgroundColor}
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
  isHoverBackgroundColor: 'trnsparent',
  width: 'auto',
  height: 'auto',
  paddingX: '2px',
  paddingY: '2px',
};
