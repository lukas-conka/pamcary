import { Mensagem } from '../shared/mensagem.model';

export class MensagensService {

    public mensagens:Mensagem[];

    public getMensagens(): Array<Mensagem> {

        this.mensagens =  JSON.parse(localStorage.getItem('mensagens'))

        if(this.mensagens == null){
            this.mensagens = []
        }else{
            return this.mensagens
        }

    }

    public sincronizarMensagens(): void{
        localStorage.setItem('mensagens',  JSON.stringify(this.mensagens));

        this.getMensagens()
    }

    public saveMensagens(mensagem:string): boolean {

        this.getMensagens()
        
        this.mensagens.push(JSON.parse(mensagem))

        localStorage.setItem('mensagens',  JSON.stringify(this.mensagens));

        return true
       
    }

    public removeMensagens(indice_selecionado: string): boolean{

        this.getMensagens()

        this.mensagens.forEach((element, i) => {

            if(element.hora === indice_selecionado){
              this.mensagens.splice(i, 1)
          
            }
          })
          this.sincronizarMensagens()
        return true
    }
}
