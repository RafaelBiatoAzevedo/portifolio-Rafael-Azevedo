import { FC, useState } from 'react';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { useTheme } from 'styled-components';

import { Wrapper, Content } from './styles';

import { Button } from '../Button';

interface ICaroucelProps {
  items: any[];
  renderComponent: (item: any) => JSX.Element;
}

export const Caroucel: FC<ICaroucelProps> = ({ items, renderComponent }) => {
  const { colors } = useTheme();
  const [index, setIndex] = useState<number>(0);

  const previusIndex = (): void => {
    setIndex((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  const nextIndex = (): void => {
    setIndex((prev) => {
      if (prev + 2 < items.length - 1) return prev + 1;
      return prev;
    });
  };

  return (
    <Wrapper>
      <Button
        onClick={() => previusIndex()}
        backgroundColor={colors.backgroundPrimary}
        isHoverBackgroundColor={colors.backgroundTopMenu}
        borderRadius="80%"
        height="4rem"
        width="3.5rem"
        icon={<BsChevronLeft color={colors.onBackgroundPrimary} size="3rem" />}
      />
      <Content>
        {renderComponent(items[index])}
        {renderComponent(items[index + 1])}
        {renderComponent(items[index + 2])}
      </Content>
      <Button
        onClick={() => nextIndex()}
        backgroundColor={colors.backgroundPrimary}
        isHoverBackgroundColor={colors.backgroundTopMenu}
        borderRadius="80%"
        height="4rem"
        width="3.5rem"
        icon={<BsChevronRight color={colors.onBackgroundPrimary} size="3rem" />}
      />
    </Wrapper>
  );
};
