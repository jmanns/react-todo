const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  render() {
    let {id, text, completed, createdAt, completedAt} = this.props;
    let renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
