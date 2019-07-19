import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import AppLocale from './languageProvider';
import asyncComponent from './helpers/AsyncFunc';

const routes = [
  {
    exact: true,
    path: '/',
    component: asyncComponent(() => import('./containers/home')),
  },
];

const PublicRoutes = ({ history }) => {
  const language = 'en';
  const currentAppLocale = AppLocale[language];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ConnectedRouter history={history}>
        <div>
          {routes.map(singleRoute => {
            const { exact, ...otherProps } = singleRoute;
            return (
              <Route
                exact={exact !== false}
                key={singleRoute.path}
                {...otherProps}
              />
            );
          })}
        </div>
      </ConnectedRouter>
    </IntlProvider>
  );
};

export default PublicRoutes;
