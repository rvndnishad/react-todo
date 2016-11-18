var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',  ()=> {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch when entered input text', ()=> {
    var searchText='Dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    todoSearch.refs.searchText.value=searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false,'Dog');
  });
  it('should cann onSearch when proper checked value', function () {
    var checkboxValue = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    todoSearch.refs.showCompleted.checked=checkboxValue;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true,'')
  });
});
