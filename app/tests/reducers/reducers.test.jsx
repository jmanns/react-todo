const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed state', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something to do',
          completed: false,
          createdAt: 23434343
        }
      };
      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      let todos = [{
        id: 111,
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      let action = {
        type: 'ADD_TODOS',
        todos
      };
      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should wipe todos on logout', () => {
      let todos = [{
        id: 111,
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      let action = {
        type: 'LOGOUT',
      };
      let res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(0);
    });

    it('should update todo', () => {
      let todos = [{
        id: 1,
        text: 'Workout',
        completed: true,
        createdAt: 12345,
        completedAt: 15555500
      }];
      let updates = {
        completed: false,
        completedAt: null
      };
      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toBe(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

  describe('authReducer', () => {
    it('should add authorized users id to state on login', () => {
      let action = {
        type: 'LOGIN',
        uid: 123
      };
      let res = reducers.authReducer(undefined, df(action));
      expect(res.uid).toEqual(123);
    });

    it('should remove authorized users id from state on logout', () => {
      let authData = {
        uid: 321
      };
      let action = {
        type: 'LOGOUT'
      };
      let res = reducers.authReducer(authData, df(action));
      expect(res.uid).toNotEqual({});
    });
  });
});
