import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaque } from 'src/app/interfaces/saque';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', [Validators.required]),
  });

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }



  sacar(){
    const saque: ISaque = this.formGroup.value;
    saque.valor = Number(saque.valor);
    this.contaService.sacar(saque).subscribe(contaAPI => {

      Swal.fire('Deu certo!', 'Sucesso', 'success');
      this.router.navigate(['/contas']);

    }, error => {
      console.log(error);
    })
    console.log(this.formGroup.value);
  }

}




