import { FC } from 'react';

import { MdAlternateEmail } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';
import {
  FaLinkedin,
  FaGithubSquare,
  FaHome,
  FaWhatsapp,
  FaBuilding,
} from 'react-icons/fa';

import { useTheme } from 'styled-components';

import { LinkContact } from './components/LinkContact';
import { Contact } from './components/Contact';

import { Wrapper, WrapperLInks, WrapperContacts } from './styles';

export const ContactMe: FC = (): JSX.Element => {
  const { colors } = useTheme();

  return (
    <Wrapper>
      <WrapperLInks>
        <LinkContact
          href="https://www.linkedin.com/in/rafael-azevedo-530889195/"
          title="Linkedin"
          color="#0e76a8"
          icon={FaLinkedin}
        />
        <LinkContact
          href="https://www.instagram.com/?hl=pt-br"
          title="Instagram"
          color="#933393"
          icon={GrInstagram}
        />
        <LinkContact
          href="https://github.com/RafaelBiatoAzevedo"
          title="GitHub"
          color={colors.secondary}
          icon={FaGithubSquare}
        />
      </WrapperLInks>
      <WrapperContacts>
        <Contact
          icon={MdAlternateEmail}
          text={['rafaelazevedo321@gmail.com', 'azevedodigital321@gmail.com']}
        />
        <Contact
          icon={FaWhatsapp}
          text={['(19) 99742-6983', '(19) 99176-9220']}
        />
        <Contact
          icon={FaHome}
          text={[
            'Rua Cleonice Ap. Cruz Thielle, 350 - Jd Alvorada',
            'Cep 13841-007 - Mogi-Guaçu - SP',
          ]}
        />
        <Contact
          icon={FaBuilding}
          text={['Azevedo Digital', 'CNPJ 39.324.590/0001-43']}
        />
      </WrapperContacts>
    </Wrapper>
  );
};
