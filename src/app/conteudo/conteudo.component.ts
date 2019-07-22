import { Component, OnInit, Input } from '@angular/core';
import { MensagensService } from '../services/mensagens.service'
import { Location } from '@angular/common'
import { Mensagem } from '../shared/mensagem.model';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.sass'],
  providers:[MensagensService]
})
export class ConteudoComponent implements OnInit {

  @Input() public postagem: string;

  public mensagens: Mensagem[]

  constructor(private mensagensService: MensagensService, private location: Location) {

    this.mensagens = mensagensService.getMensagens()
    
   }

   public deletarMsg(indice_selecionado: any): void{

      let deletarSucesso = this.mensagensService.removeMensagens(indice_selecionado)

      if(deletarSucesso){
          this.load()
      }
    
   }

  ngOnInit() {
  
  }

  load(){
    location.reload()
  }

}
