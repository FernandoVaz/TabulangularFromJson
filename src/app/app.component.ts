import { Component } from '@angular/core';
//import studentsData from './students.json';

interface Student {
    id: Number;
    name: String;
    email: String;
    gender: String;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  title = "tabulangularFromJson";
  name = 'Angular';
  //students: Student[] = studentsData;
}