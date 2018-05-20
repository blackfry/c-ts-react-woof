/* eslint-disable import/no-extraneous-dependencies */
const { JSDOM } = require('jsdom');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('ignore-styles').default(['.scss']);
const hook = require('css-modules-require-hook');
const sass = require('node-sass');

hook({
    extensions: [ '.scss' ],
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    preprocessCss: data => sass.renderSync({ data }).css
})

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
