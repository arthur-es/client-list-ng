import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string = "";
  age: number = 0;
  clients: Client[] = [];
  
  save(){
    this.clients.push(
      { name: this.name, age: this.age }
    );
    this.clearFields();
  }
  clearFields() {
    this.name = "";
    this.age = 0;
  }
  deleteClient(i: number) {
    console.log("deletando cliente " + i);
    this.clients.splice(i, 1);
  }
  updateClient(client: Client, i: number) {
    this.clients[i].name = client.name;
    this.clients[i].age = client.age;
  }

  constructor() { }

  ngOnInit() {
  }

}
