import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Image from './Image';

const props = {
  image: 'Image component',
  isVideo: false,
};

describe('Image', () => {
  it('should render default component', () => {
    const wrapper = shallow(
      <Image
        image={props.image}
        isVideo={props.isVideo}
      />);
    expect(wrapper).to.matchSnapshot();
  });
});
