import React from 'react';
import * as Redux from 'react-redux';

import ClearTodos from 'ClearTodos';
import Nav from 'Nav';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export const TodoApp = React.createClass({
  render () {
    return (
      <div>
        <Nav/>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
              <ClearTodos/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
