import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  myTodos:Todo[] ;
  localItem:any; 

  constructor() {
    this.localItem = localStorage.getItem("todos") ; 
    if(this.localItem === null){
      this.myTodos = [] ; 
    }else{
      this.myTodos = JSON.parse(this.localItem) ; 
    } 
  }

  deleteTodo(todo:Todo) {
    // console.log(todo)
    const index = this.myTodos.indexOf(todo) ; 
    this.myTodos.splice(index,1) ; 
    localStorage.setItem("todos",JSON.stringify(this.myTodos))
  }
  addTodo(todo:Todo){
    this.myTodos.push(todo) ; 
    localStorage.setItem("todos",JSON.stringify(this.myTodos))
  }
}
