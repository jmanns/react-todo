const React = require('react');
const {connect} = require('react-redux');
import * as actions from 'actions';

export const ClearTodos = React.createClass({
  onClear (e) {
    let {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.removeTodos());
  },
  render () {
    return (
      <div className="container__footer">
          <button className="button alert expanded" onClick={this.onClear}>Clear All Todos</button>
      </div>
    );
  }
});

export default connect()(ClearTodos);
