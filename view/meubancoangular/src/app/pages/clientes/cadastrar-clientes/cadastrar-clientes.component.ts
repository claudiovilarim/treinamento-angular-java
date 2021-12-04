import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: ''
  // });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // console.warn('Enviado!', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
