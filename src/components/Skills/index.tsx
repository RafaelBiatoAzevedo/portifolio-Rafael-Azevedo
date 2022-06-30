import { createElement, FC } from 'react';

import { IconType } from 'react-icons/lib';

import { Wrapper, WrapperText, WrapperTitle } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

interface ISKillsProps {
  title: string;
  iconOne: IconType;
  iconsTwo: IconType;
  message: string;
  skills: string[];
}

export const Skills: FC<ISKillsProps> = ({
  title,
  iconOne,
  iconsTwo,
  message,
  skills,
}): JSX.Element => {
  return (
    <Wrapper>
      <WrapperText>
        <WrapperTitle>
          <Text title={title} size="3rem" weight="600" />
          <div>
            {createElement(iconOne)}
            <Text title="+" size="3rem" />
            {createElement(iconsTwo)}
          </div>
        </WrapperTitle>
        <div>
          <Text title={message} size="1.6rem" />
        </div>
      </WrapperText>
      <div>
        {skills.map((skill) => (
          <div>
            <Text
              title={<Translator path={skill} />}
              size="1.6rem"
              weight="900"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
