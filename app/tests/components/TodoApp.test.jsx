var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', ()=> {
    expect(TodoApp).toExist();
  });
  it('should add todo to todos state on handleAddTodo', () => {
    var todoText = "TextText";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);

    /*expect createdAt to be a number
    *
    *
    * CODE HERE
    *
    *
    */

  });
  it('should toggle completed Value when handleToggle called',  ()=> {
    var todoData = {
      id:11,
      text:'Test Feather',
      completed:false,
      cretedAt:0,
      completedAt:undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);

    /*expect completedAt to be a number
    *
    *
    * CODE HERE
    *
    *
    */

  });

  /*Test that when toggle from TRUE to FALSE, completedAt get removed
  *
  *
  * CODE HERE
  *
  *
  */

});
