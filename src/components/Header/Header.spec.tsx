import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Header from './Header';

const props = {
  handleFetchImages: spy(),
};

describe('Header', () => {
  it('should render default component', () => {
    const wrapper = shallow(
      <Header {...props} />);
    expect(wrapper).to.matchSnapshot();
  });
});
