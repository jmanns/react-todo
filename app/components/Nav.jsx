const React = require('react');
const {connect} = require('react-redux');
const {Link, IndexLink} = require('react-router');
import * as actions from 'actions';

export const Nav = React.createClass({
  onLogout (e) {
    let {dispatch} = this.props;

    dispatch(actions.startLogout());
  },
  render () {
    let {name} = this.props;
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Welcome Back {name}</li>
          </ul>
        </div>
        <div className="top-bar-right">
            <button onClick={this.onLogout} className="button expanded">Logout</button>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      name: state.auth.name
    }
  }
)(Nav);
