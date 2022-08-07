import { TaskList } from './../../model/task-list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: "Primeira Tarefa",
      checked: true
    },
    { task: "Segunda Tarefa",
      checked: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Voce deseja realmente deletar tudo?")
    if(confirm){
      this.taskList = [];
    }
  }

}
