  angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', edit:false},
      {text:'build an AngularJS app', edit:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, edit:false});
      todoList.todoText = '';
    };
 
    todoList.clearlist = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
    };

    todoList.removeTodo = function(todo){
      todoList.todos.splice( todoList.todos.indexOf(todo), 1 );

      // todoList.todos = [];
      // angular.forEach(oldList, function(x) {
      //   if (!x.done) todoList.push(x);
      // }
    };
  });