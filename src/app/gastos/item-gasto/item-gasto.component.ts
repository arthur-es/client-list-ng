import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../gasto.model';

@Component({
  selector: 'app-item-gasto',
  templateUrl: './item-gasto.component.html',
  styleUrls: ['./item-gasto.component.css']
})
export class ItemGastoComponent implements OnInit {

  @Input() gasto: Gasto;

  memo: string = "";
  valor: number = 0;

  onEdit: boolean = false;

  editGasto(){
    this.onEdit = true;
  }
  saveGasto(){
    this.onEdit = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
