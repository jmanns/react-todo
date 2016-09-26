const React = require('react');

const AddTodo = React.createClass({
  handleSubmit (e) {
    e.preventDefault();

    let todo = this.refs.newTodo.value;

    if (todo.length > 0) {
      this.refs.newTodo.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.newTodo.focus();
    }
  },
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add new todo" ref="newTodo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
