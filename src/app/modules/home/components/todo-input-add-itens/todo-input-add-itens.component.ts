import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public itemTaskList: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.itemTaskList = this.itemTaskList.trim()
    if(this.itemTaskList){
      this.emitItemTaskList.emit(this.itemTaskList);
      this.itemTaskList = "";
    }
  }

}
