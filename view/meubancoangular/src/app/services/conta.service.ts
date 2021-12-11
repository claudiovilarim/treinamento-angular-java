import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { ISaque } from '../interfaces/saque';

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
  depositar(valor: ISaque){
    return this.http.post(`${this.api}/deposito`, valor);
  }
}


