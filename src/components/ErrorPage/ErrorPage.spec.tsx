import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ErrorPage from './ErrorPage';

const props = {
  message: 'error page message',
};

describe('ErrorPage', () => {
  it('should render default component', () => {
    const wrapper = shallow(
      <ErrorPage {...props} />);
    expect(wrapper).to.matchSnapshot();
  });
});
