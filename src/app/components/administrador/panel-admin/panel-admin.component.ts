import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const verProductosLink = document.querySelector(".verProductosLink");
    const verReportesLink = document.querySelector(".verReporteslink");
    const spanReportes = document.querySelector(".spanReportes");
    const spanProductos = document.querySelector(".spanProductos");
    const reporteVentas = document.querySelector(".reporteVentas");
    const crud = document.querySelector(".crud");

    verReportesLink.addEventListener("click",function(){
      spanReportes.classList.remove("hiddenSpan");
      spanProductos.classList.add("hiddenSpan");
      crud.classList.add("hidden");
      reporteVentas.classList.remove("hidden");
    })

    verProductosLink.addEventListener("click",function(){
      spanReportes.classList.add("hiddenSpan");
      spanProductos.classList.remove("hiddenSpan");
      crud.classList.remove("hidden");
      reporteVentas.classList.add("hidden");
    })

  }

  

}
