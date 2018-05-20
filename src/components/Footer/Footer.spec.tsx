import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('should render default component', () => {
    const wrapper = shallow(
      <Footer/>);
    expect(wrapper).to.matchSnapshot();
  });
});
