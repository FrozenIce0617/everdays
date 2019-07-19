import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { AppContext } from './AppContext';
import AppLocale from './languageProvider';
import asyncComponent from './helpers/AsyncFunc';

const routes = [
  {
    exact: true,
    path: '/',
    component: asyncComponent(() => import('./containers/home')),
  },
];

class PublicRoutes extends React.Component {
  state = {
    language: 'en',
  };

  switchLanguage = (language: string) => {
    this.setState({
      language,
    });
  };

  render() {
    const { history } = this.props;
    const { language } = this.state;
    const currentAppLocale = AppLocale[language];
    const contextValue = {
      language,
      switchLanguage: this.switchLanguage,
    };

    return (
      <AppContext.Provider value={contextValue}>
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
      </AppContext.Provider>
    );
  }
}

export default PublicRoutes;
