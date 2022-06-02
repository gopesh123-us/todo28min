import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  //member variable in an object form
  todos = [

    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(1, 'Learn to Master Angular 10', false, new Date()),
    new Todo(1, 'Java Certification', false, new Date()),
    new Todo(1, 'RedHat Certification', false, new Date()),

/*  {id: '1', description: 'Learn to Dance'},
    {id: '2', description: 'Learn to Master Angular 10'},
    {id: '3', description: 'Java Certification'},
    {id: '4', description: 'RedHat Certification'} */
  ];

 /*  todo = {
    id: '1',
    description: 'Learn to dance'
  }; */

  constructor() { }

  ngOnInit(): void {
  }

}
