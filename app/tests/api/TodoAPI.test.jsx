var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', function () {
  beforeEach(() =>{
    localStorage.removeItem('todos')
  });
  it('should exist', function () {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', function () {
    it('should set valid todos array', function () {
      var todos = [{
        id:23,
        text:'Test all files',
        completed:false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos)
    });
    it('should not set invalid todos array', function () {
      var badTodos = {
        a:'b'
      };
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', function () {
    it("should return todo if valid input in the localStorage", ()=> {
      var todos = [{
        id:99,
        text:'Valid Data',
        completed:true
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var cur_todo = TodoAPI.getTodos('todos')
      expect(cur_todo).toEqual(todos);

    });
    it('should return an empty array for bad localStorage data', function () {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([])
    });
  });

  describe('filterTodos', function () {
    var todos = [{
      id:1,
      text:'Some text',
      completed:true
    }, {
      id:2,
      text:'Some text',
      completed:false
    }, {
      id:3,
      text:'Eat Food',
      completed:true
    }];

    it('should return all item if showCompleted is true', function () {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return non-completed todos if showCompleted is false', function () {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', function () {
      var filteredTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filteredTodos[0].completed).toBe(false);
    });
    it('should filter the todos by search text', function () {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });
    it('should return all todos if search text is empty', function () {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
