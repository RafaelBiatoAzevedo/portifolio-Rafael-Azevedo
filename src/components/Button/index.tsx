import { createElement, FC } from 'react';

import { Wrapper } from './styles';

import { Text } from '../Text';

interface IButtonProps {
  title?: string;
  icon?: JSX.Element;
  onClick: () => void;

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
  title,
  icon,
  backgroundColor = 'transparent',
  isHoverBackgroundColor = 'transparent',
  borderRadius = '2px',
  width = 'auto',
  height = 'auto',
  paddingX = '2px',
  paddingY = '2px',
}) => {
  return (
    <Wrapper
      onClick={onClick}
      backgroundcolor={backgroundColor}
      isHoverBackgroundColor={isHoverBackgroundColor}
      width={width}
      height={height}
      paddingX={paddingX}
      paddingY={paddingY}
      borderRadius={borderRadius}
    >
      {!!title && <Text title={title} />}
      {!!icon && icon}
    </Wrapper>
  );
};

Button.defaultProps = {
  title: undefined,
  icon: undefined,
  borderRadius: '2px',
  backgroundColor: 'transparent',
  isHoverBackgroundColor: 'trnsparent',
  width: 'auto',
  height: 'auto',
  paddingX: '2px',
  paddingY: '2px',
};
