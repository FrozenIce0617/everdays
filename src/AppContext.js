import React from 'react';

export const AppContext = React.createContext({
  language: 'en',
  switchLanguage: () => {},
});

export function withAppContext(Component) {
  return function BoundComponent(props) {
    return (
      <AppContext.Consumer>
        {value => <Component {...props} appContext={value} />}
      </AppContext.Consumer>
    );
  };
}
