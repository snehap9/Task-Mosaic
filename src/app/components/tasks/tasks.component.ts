import { Component, OnInit } from '@angular/core';
import {Task} from './../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[];
  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {content: 'Buy groceries',
      completed: false},
      {content: 'Email Erica',
      completed: false},
      {content: 'Book dentist appt',
      completed: true}
    ]
  }
  toggleDone(id:number){
    this.tasks.map((v,i) => {
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }
  deleteTask(id:number){
    this.tasks = this.tasks.filter((v,i) => i!=id);
  }
  inputTask:string="";

  addTask(){
    this.tasks.push({
      content:this.inputTask,
      completed:false
    });
    this.inputTask="";//clears the enter task bar after a task has been entered
  }
}
