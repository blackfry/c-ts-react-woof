import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ImageList from './ImageList';

const props = {
  images: ['https://random.dog/2ee86ac3-9bc3-49bb-998d-1bb7a1a913e9.jpg'],
};

describe('ImageList', () => {
  it('should render default component', () => {
    const wrapper = shallow(<ImageList {...props} />);
    expect(wrapper).to.matchSnapshot();
  });
});
