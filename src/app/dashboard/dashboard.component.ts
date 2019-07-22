import { Component, OnInit, ViewChild } from '@angular/core';
import { MensagensService } from '../services/mensagens.service'
import { ASSUNTO } from './assunto-mock'
import { Mensagem } from '../shared/mensagem.model'
import {NgForm} from '@angular/forms'

import {DatePipe } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers:[MensagensService, DatePipe]
})
export class DashboardComponent implements OnInit {

  @ViewChild('formulario', {static: false}) public formulario: NgForm

  public data = new Date
  public hora: string

  public sucessoCadastro: boolean = false

  public assuntos: Array<object> = ASSUNTO
  

  constructor(private mensagensService: MensagensService, public datePipe: DatePipe) {
    this.hora = this.datePipe.transform(this.data, 'hh:mm:ss')
   }

  public confirmarCompra(): void{

    let  mensagem = new Mensagem(
      this.formulario.value.titulo,
      this.formulario.value.assunto,
      this.hora,
      this.formulario.value.mensagem,
    )

    this.mensagensService.saveMensagens(JSON.stringify(mensagem));

    this.sucessoCadastro = true
  }

  ngOnInit() {
    
  }

}
