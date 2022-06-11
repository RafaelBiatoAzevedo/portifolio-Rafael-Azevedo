import { FC } from 'react';

import { GiBrain } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';

import { softSkills } from '~/utils/paths';

import { Wrapper, WrapperText, WrapperTitle } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const SoftSkills: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <WrapperText>
        <WrapperTitle>
          <Text title="SoftSkills" size="3rem" weight="600" />
          <div>
            <GiBrain />
            <Text title="+" size="3rem" />
            <AiFillHeart />
          </div>
        </WrapperTitle>
        <div>
          <Text
            title="Habilidades pessoais adquiridas ao longo da vida social e profissional,"
            size="1.6rem"
          />
          <Text title="aperfeiçoadas no curso da TRYBE" size="1.6rem" />
          <Text title="e praticadas diariamente." size="1.6rem" />
        </div>
      </WrapperText>
      <div>
        {softSkills.map((hability) => (
          <div>
            <Text
              title={<Translator path={hability} />}
              size="1.6rem"
              weight="900"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
