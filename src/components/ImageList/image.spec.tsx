import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ImageList from './ImageList';

const props = {
  message: 'ImageList component',
};

describe('ImageList', () => {
  it('should render default component', () => {
    const wrapper = shallow(<ImageList {...props} />);
    expect(wrapper).to.matchSnapshot();
  });
});
