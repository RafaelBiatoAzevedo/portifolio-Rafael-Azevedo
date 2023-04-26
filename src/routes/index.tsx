import { FC } from 'react';

import { Routes as RoutesDom, Route } from 'react-router-dom';

import { TopMenu } from '~/components/TopMenu';
import { Footer } from '~/components/Footer';

export const Routes: FC = () => {
  return (
    <>
      <TopMenu />
      <RoutesDom>
        <Route />
      </RoutesDom>
      <Footer />
    </>
  );
};
