/* eslint-disable import/no-extraneous-dependencies */
const { JSDOM } = require('jsdom');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('ignore-styles').default(['.sass', '.scss']);

function testConfig() {
  const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
  const { window } = jsdom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };

  global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0);
  };

  enzyme.configure({ adapter: new Adapter() });
}

module.exports = testConfig();
