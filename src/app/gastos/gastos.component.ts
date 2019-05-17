import { Component, OnInit } from '@angular/core';
import { Gasto } from './gasto.model';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  memo: string = '';
  valor: number = 0;

  gastos: Gasto[] = [];

  saveGasto(){
    this.gastos.push(
      {memo: this.memo, valor: this.valor}
    );
    this.cancelGasto();
  }

  cancelGasto(){
    this.memo = '';
    this.valor = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
