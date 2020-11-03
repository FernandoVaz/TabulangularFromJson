import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

export class AppComponent implements OnInit {
  title = "tabulangularFromJson";
  name = 'Angular';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/data').subscribe({
        next: data => {
            console.log(data);
        },
        error: error => {
            console.error('There was an error!', error);
        }
    });
  }
  //students: Student[] = studentsData;
}