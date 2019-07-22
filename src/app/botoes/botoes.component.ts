import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { MensagensService } from '../services/mensagens.service';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.sass'],
  providers:[MensagensService]
})
export class BotoesComponent implements OnInit {

  public mensagens = []

  @Output() public exibirMsg = new EventEmitter()

  public clickHandlerMsg(id) {
    
    this.exibirMsg.emit(id)
  }

  constructor(private mensagensService: MensagensService) { 

   }

  ngOnInit() {

    this.mensagens = this.mensagensService.getMensagens();

  }

}
