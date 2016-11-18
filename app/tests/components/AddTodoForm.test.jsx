var React = require('react');
var ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

var AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', function () {
  it("should exist", ()=>{
    expect(AddTodoForm).toExist();
  });

  it('should call the function onAddTodo when right value is passed', function () {
    var todotext = 'Close bar'
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value=todotext;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todotext);

  });

  it('should call the function onAddTodo when right value is passed', function () {
    var todotext = ''
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value=todotext;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
