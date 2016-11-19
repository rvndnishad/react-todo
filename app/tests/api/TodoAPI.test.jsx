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
  })
});
