const React = require('react');

const Todo = React.createClass({
  render() {
    let {id, text} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = Todo;
