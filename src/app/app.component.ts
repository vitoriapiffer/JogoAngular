import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private colunas = [1,2,3];

  private quadrados: string[] = new Array<any>(9);
  
  private xDeposit: Boolean = true;

  private status = "Vez do Jogador: X" 
  
  markClick(index){
    if (this.verificaVencer() || this.quadrados[index] != undefined) {
      return;
    }

    this.xDeposit === true ? this.quadrados[index] = "X" : this.quadrados[index] = "O"

    this.xDeposit = !this.xDeposit

    if ( this.verificaVencer()) {
      status = "Vencedor: " + (this.xDeposit ? "O" : "X");
      alert("O jogador "  + (this.xDeposit ? "O" : "X") + " ganhou!");
      return;
    } 

    this.status = "Vez do Jogador: " + (this.xDeposit ? "X" : "O");
  
  }

  restartGame(){
    this.quadrados = new Array<any>(9);
    this.xDeposit = true;
  }

  verificaVencer(){
    const c11 = this.quadrados[0];
    const c12 = this.quadrados[1];
    const c13 = this.quadrados[2];
    const c21 = this.quadrados[3];
    const c22 = this.quadrados[4];
    const c23 = this.quadrados[5];
    const c31 = this.quadrados[6];
    const c32 = this.quadrados[7];
    const c33 = this.quadrados[8];


    if (((c11 !== undefined) && (c12 !== undefined) && (c13 !== undefined) && (c11 === c12) && (c12 === c13)) || ((c11 !== undefined) 
    && (c22 !== undefined) && (c33 !== undefined) && (c11 === c22) && (c22 === c33)) || ((c11 !== undefined) 
    && (c21 !== undefined) && (c31 !== undefined) && (c11 === c21) && (c21 === c31)) || ((c21 !== undefined) 
    && (c22 !== undefined) && (c23 !== undefined) && (c21 === c22) && (c22 === c23)) || ((c31 !== undefined) 
    && (c32 !== undefined) && (c33 !== undefined) && (c31 === c32) && (c32 === c33)) || ((c12 !== undefined) 
    && (c22 !== undefined) && (c32 !== undefined) && (c12 === c22) && (c22 === c32)) || ((c13 !== undefined) 
    && (c23 !== undefined) && (c33 !== undefined) && (c13 === c23) && (c23 === c33)) || ((c31 !== undefined) 
    && (c22 !== undefined) && (c13 !== undefined) && (c31 === c22) && (c22 === c13))){

        
      return true
    }
    return null
  }

}
