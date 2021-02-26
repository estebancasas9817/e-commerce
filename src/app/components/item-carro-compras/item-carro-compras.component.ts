import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-item-carro-compras',
  templateUrl: './item-carro-compras.component.html',
  styleUrls: ['./item-carro-compras.component.css']
})
export class ItemCarroComprasComponent implements OnInit {
  @Input() carroItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
