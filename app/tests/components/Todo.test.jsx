const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
