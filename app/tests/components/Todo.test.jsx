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

  it('should call onToggle prop with id on click', () => {
    let todoData = {
      id: 199,
      text: 'Write tests',
      completed: true
    };
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    let $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(199);
  });
});
