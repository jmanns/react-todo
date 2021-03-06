const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
  handleSubmit (e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.newTodo.value;

    if (todoText.length > 0) {
      this.refs.newTodo.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.newTodo.focus();
    }
  },
  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add new todo" ref="newTodo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
