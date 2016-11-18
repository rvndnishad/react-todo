var React = require('react');

var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');

var  TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id:1,
          text:'Walk the dog'
        } , {
          id:2,
          text:'Clean the yard'
        }, {
          id:3,
          text:'Do dishes'
        }, {
          id:4,
          text:'Play Cricket'
        }
      ]
    };
  },
  handleAddTodo:function(text){
    alert(this.state.todos.length);
    this.state.todos.push({id:this.state.todos.length, text:text})
  },
  render:function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
