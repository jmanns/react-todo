const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({
  getInitialState () {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dogs'
        }, {
          id: 2,
          text: 'go for jog'
        }, {
          id: 3,
          text: 'workout'
        }, {
          id: 4,
          text: 'study'
        }
      ]
    }
  },
  handleAddTodo (todo) {
    alert('new todo: ' + todo)
  },
  render () {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
