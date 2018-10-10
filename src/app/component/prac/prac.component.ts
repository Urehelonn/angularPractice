import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prac',
  templateUrl: "./prac.component.html",
  styleUrls: ['./prac.component.css'],
  inputs: ['name']
})
export class PracComponent implements OnInit {
  @Output()
  change = new EventEmitter();

  checked = true;
  name = 'Hahahah';
  viewMode ='map';
  todoList = ['hamish','marigold','coding','placeholder2'];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.checked = !this.checked;
    this.change.emit({
      name: this.name,
      check: this.checked
    });
  }

  view1Click(){
    this.viewMode= this.viewMode==='view1'?'other':'view1';
  }
  view2Click(){
    this.viewMode= this.viewMode==='view2'?'other':'view2';
  }

  addTodo(){
    this.todoList.push('todo Item'+(this.todoList.length+1));
  }
  onRemoveTodoItem(item){
    let res=this.todoList.indexOf(item);
    this.todoList.splice(res,1);
  }
  trackCourse(index, course){
    return course? course.id:undefined;
  }
}
