import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public postagens: object = {};

  public exibirMsg(tipo: object): void{
    this.postagens = tipo;
  }

  constructor() { }

  

  ngOnInit() {
  }

}
