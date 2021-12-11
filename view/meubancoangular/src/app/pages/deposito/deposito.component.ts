import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDeposito } from 'src/app/interfaces/deposito';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', [Validators.required]),
  });

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  depositar(){
    const deposito: IDeposito = this.formGroup.value;
    deposito.valor = Number(deposito.valor);
    this.contaService.depositar(deposito).subscribe(contaAPI => {

      Swal.fire('Deu certo!', 'Depositado com Sucesso', 'success');
      this.router.navigate(['/contas']);

    }, error => {
      console.log(error);
    })
    console.log(this.formGroup.value);
  }

}
