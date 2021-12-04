import { ICliente } from "./cliente";

export interface IConta {
  cliente: ICliente;
  numero: string;
  agencia: string;
  saldo: number;
}
