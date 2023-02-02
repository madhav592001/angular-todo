import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  @Output() addTodo:EventEmitter<Todo> = new EventEmitter() ; 

  title:String; 
  desc:String;

  onSubmit(){
    const todo = {
      sno:8 ,
      title:this.title,
      desc:this.desc, 
      active:true,
    }

    this.addTodo.emit(todo) ; 
  }

}
