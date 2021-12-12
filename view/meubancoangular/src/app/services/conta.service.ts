import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { IDeposito } from '../interfaces/deposito';
import { ISaque } from '../interfaces/saque';
import { ITransferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  api = `${environment.api}/contas/`;
  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IConta[]>(this.api);
  }

  sacar(valor: ISaque){
    return this.http.post(`${this.api}/saque`, valor);
  }
  depositar(valor: IDeposito){
    return this.http.post(`${this.api}/deposito`, valor);
  }
  transferir(valor: ITransferencia){
    return this.http.post(`${this.api}/transferencia`, valor);
  }
}


