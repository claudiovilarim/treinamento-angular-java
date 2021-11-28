import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {

  @Input()
  exibindo: boolean = false;

  @Input()
  exibirTextoAlerta: string = '';

//  label + input (conta)
//  checkbox (aceito termos)
//  botao (enviar)
// ng generate componente label input
// exibir dentro de Saque
//

  constructor() { }

  ngOnInit(): void {
  }

}
