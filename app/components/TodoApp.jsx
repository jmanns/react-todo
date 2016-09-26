const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render () {
    let {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
