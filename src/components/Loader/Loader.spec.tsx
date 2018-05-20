import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('should render default component', () => {
    const wrapper = shallow(<Loader/>);
    expect(wrapper).to.matchSnapshot();
  });
});
