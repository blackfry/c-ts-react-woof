import * as React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy, stub, SinonStub } from 'sinon';
import App from './App';

const props = {
  images: ['https://random.dog/2ee86ac3-9bc3-49bb-998d-1bb7a1a913e9.jpg'],
};

describe('App', () => {
  const mockVerifyCard = spy();
  // const wrapper = shallow(<App  />);

  it('should render default component', () => {
    const wrapper = shallow(
      <App />);
    expect(wrapper).to.matchSnapshot();
  });

  it('should not call verifyCard for a invalid field', () => {
    const wrapper = mount(<App />);

    const component = () => shallow(<App />);

    const AppWrapper = component();

    it('should render form as disabled by default', () => {
    const { images, message, loading } = AppWrapper.state();
    expect(images).to.deep.equal([]);
  });
});
});
