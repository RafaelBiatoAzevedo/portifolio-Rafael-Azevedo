import { FC } from 'react';

import { Element as ElementScroll } from 'react-scroll';
import { Routes as RoutesDom, Route } from 'react-router-dom';

import { Home } from '~/pages/Home';
import { TopMenu } from '~/components/TopMenu';
import { Footer } from '~/components/Footer';

export const Routes: FC = () => {
  return (
    <>
      <TopMenu />
      <RoutesDom>
        <Route path="/" Component={Home} />
      </RoutesDom>
      <ElementScroll name="contactMe">
        <Footer />
      </ElementScroll>
    </>
  );
};
