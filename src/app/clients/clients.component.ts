import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string = "";
  age: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
