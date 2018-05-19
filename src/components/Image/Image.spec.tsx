import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Image from './Image';

const props = {
  message: 'Image component',
};

describe('Image', () => {
  it('should render default component', () => {
    const wrapper = shallow(<Image {...props} />);
    expect(wrapper).to.matchSnapshot();
  });
});
