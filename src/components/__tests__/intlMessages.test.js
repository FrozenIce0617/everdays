import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { IntlProvider } from 'react-intl';

import IntlMessage from '../intlMessages';

describe('<IntlMessage />', () => {
  it('renders component', () => {
    const component = shallow(
      <IntlProvider
        locale="en"
        messages={{
          title: 'title',
        }}
      >
        <IntlMessage id="title" />
      </IntlProvider>,
    );

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
