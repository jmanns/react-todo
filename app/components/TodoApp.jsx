const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'walk the dogs',
          completed: false
        }, {
          id: uuid(),
          text: 'go for jog',
          completed: true
        }, {
          id: uuid(),
          text: 'workout',
          completed: false
        }, {
          id: uuid(),
          text: 'study',
          completed: false
        }
      ]
    }
  },
  handleAddTodo (todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todo,
          completed: false
        }
      ]
    });
  },
  handleToggle (id) {
    let upatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: upatedTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
