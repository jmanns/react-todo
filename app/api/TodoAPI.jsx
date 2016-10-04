const $ = require('jquery');

module.exports = {
  filterTodos (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      let text = searchText.toLowerCase();
      return (searchText.length === 0 || todo.text.indexOf(text) > -1);
    });

    filteredTodos.sort((a, b) => {
      if (a.completed && b.completed)  return -1;
      if (a.completed && !b.completed) return 1
      return 0;
    });

    return filteredTodos;
  }
}
