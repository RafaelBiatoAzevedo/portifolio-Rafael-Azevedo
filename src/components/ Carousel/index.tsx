import { FC, useState } from 'react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { useTheme } from 'styled-components';

import { Wrapper, Content } from './styles';

import { Text } from '../Text';
import { Button } from '../Button';

interface ICaroucelProps {
  items: string[];
}

export const Caroucel: FC<ICaroucelProps> = ({ items }) => {
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
        borderRadius="100px"
        height="4rem"
        width="3.5rem"
        icon={<HiChevronLeft color={colors.onBackgroundPrimary} size="3rem" />}
      />
      <Content>
        <Text title={items[index]} size="20rem" />
        <Text title={items[index + 1]} size="20rem" />
        <Text title={items[index + 2]} size="20rem" />
      </Content>
      <Button
        onClick={() => nextIndex()}
        backgroundColor={colors.backgroundPrimary}
        isHoverBackgroundColor={colors.backgroundTopMenu}
        borderRadius="100px"
        height="4rem"
        width="3.5rem"
        icon={<HiChevronRight color={colors.onBackgroundPrimary} size="3rem" />}
      />
    </Wrapper>
  );
};
