import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const flecha = document.querySelector(".flecha--leer");
    const flechas = document.querySelector(".flecha");
    const hidden = document.querySelector(".leerBox--p");
    const esconder = document.querySelector(".leerText");
    flecha.addEventListener("click",function(){
        hidden.classList.toggle("hidden");
      })

    flechas.addEventListener("click",function(){
      esconder.classList.toggle("hidden");
      })  

      
    }
    
}
