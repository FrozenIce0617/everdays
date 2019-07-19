import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const PublicRoutes = () => {
  const language = 'en';
  const currentAppLocale = AppLocale[language];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <Router>
        <Switch>
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
        </Switch>
      </Router>
    </IntlProvider>
  );
};

export default PublicRoutes;
