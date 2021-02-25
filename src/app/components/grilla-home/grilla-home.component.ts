import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-home',
  templateUrl: './grilla-home.component.html',
  styleUrls: ['./grilla-home.component.css']
})
export class GrillaHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var imagen1 = document.getElementById("imagen1");
    var imagen2 = document.getElementById("imagen2");
    var imagen3 = document.getElementById("imagen3");
    var imagen4 = document.getElementById("imagen4");
    var imagen5 = document.getElementById("imagen5");
    var imagen6 = document.getElementById("imagen6");
    imagen1.addEventListener("click", function()
    {
      location.href= "beachwear";
    })
    imagen2.addEventListener("click", function()
    {
      location.href= "top";
    })
    imagen3.addEventListener("click", function()
    {
      location.href= "shorts";
    })
    imagen4.addEventListener("click", function()
    {
      location.href= "camisetas";
    })
    imagen5.addEventListener("click", function()
    {
      location.href= "buzos";
    })
    imagen6.addEventListener("click", function()
    {
      location.href= "gorras";
    })
  }

}
