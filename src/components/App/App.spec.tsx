import * as React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy, stub, SinonStub } from 'sinon';
import App from './App';

describe('App', () => {
  it('should render default component', () => {
    const wrapper = shallow(
      <App />);
    expect(wrapper).to.matchSnapshot();
  });
});
