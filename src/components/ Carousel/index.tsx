import { FC, useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { useTheme } from 'styled-components';

import { Wrapper, Content } from './styles';

import { Button } from '../Button';

interface ICaroucelProps {
  items: any[];
  renderComponent: (item: any) => JSX.Element;
  numberElements: number;
  backgroundButton: 'primary' | 'secondary';
}

export const Caroucel: FC<ICaroucelProps> = ({
  items,
  renderComponent,
  numberElements,
  backgroundButton,
}) => {
  const { colors } = useTheme();
  const [index, setIndex] = useState<number>(0);
  const [isMouseOverButtonLeft, setisMouseOverButtonLeft] =
    useState<boolean>(false);
  const [isMouseOverButtonRight, setisMouseOverButtonRight] =
    useState<boolean>(false);

  const previusIndex = (): void => {
    setIndex((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  const nextIndex = (): void => {
    setIndex((prev) => {
      if (prev + (numberElements - 1) < items.length - 1) return prev + 1;
      return prev;
    });
  };

  return (
    <Wrapper>
      <Button
        onClick={() => previusIndex()}
        onMouseOver={() => setisMouseOverButtonLeft(true)}
        onMouseOut={() => setisMouseOverButtonLeft(false)}
        isHoverBackgroundColor={
          backgroundButton === 'primary'
            ? colors.backgroundPrimary
            : colors.backgroundSecondary
        }
        borderRadius="80%"
        height="4rem"
        width="4rem"
        icon={
          <FaChevronLeft
            color={
              backgroundButton === 'primary'
                ? isMouseOverButtonLeft
                  ? colors.onBackgroundPrimary
                  : colors.backgroundPrimary
                : isMouseOverButtonLeft
                ? colors.onBackgroundSecondary
                : colors.backgroundSecondary
            }
            size="2.5rem"
          />
        }
      />
      <Content>
        {numberElements >= 1 && renderComponent(items[index])}
        {numberElements >= 2 && renderComponent(items[index + 1])}
        {numberElements >= 3 && renderComponent(items[index + 2])}
      </Content>
      <Button
        onClick={() => nextIndex()}
        onMouseOver={() => setisMouseOverButtonRight(true)}
        onMouseOut={() => setisMouseOverButtonRight(false)}
        isHoverBackgroundColor={
          backgroundButton === 'primary'
            ? colors.backgroundPrimary
            : colors.backgroundSecondary
        }
        borderRadius="80%"
        height="4rem"
        width="4rem"
        icon={
          <FaChevronRight
            color={
              backgroundButton === 'primary'
                ? isMouseOverButtonRight
                  ? colors.onBackgroundPrimary
                  : colors.backgroundPrimary
                : isMouseOverButtonRight
                ? colors.onBackgroundSecondary
                : colors.backgroundSecondary
            }
            size="2.5rem"
          />
        }
      />
    </Wrapper>
  );
};
