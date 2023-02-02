import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() myTodo:Todo ; 
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter() ; 

  constructor() {}

  deleteTodo(todo:Todo) {
    this.todoDelete.emit(todo) ;
    // console.log("delete todo button clicked")
  }

}
